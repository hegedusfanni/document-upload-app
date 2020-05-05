import {Injectable} from '@angular/core';
import {FileUploadService} from '../documents/services/file-upload.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromFileUploadActions from './actions';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import {catchError, concatMap, map, takeUntil} from 'rxjs/operators';
import {HttpEvent, HttpEventType} from '@angular/common/http';
import {serializeError} from 'serialize-error';

@Injectable()
export class UploadFileEffects {
  @Effect()
  uploadRequestEffect$: Observable<Action> = this.actions$.pipe(
    ofType(fromFileUploadActions.ActionTypes.UPLOAD_REQUEST),
    concatMap(action =>
      this.fileUploadService.uploadFile(action.payload.file).pipe(
        takeUntil(
          this.actions$.pipe(
            ofType(fromFileUploadActions.ActionTypes.UPLOAD_COMPLETED)
          )
        ),
        map(event => this.getActionFromHttpEvent(event)),
        catchError(error => of(this.handleError(error)))
      )
    )
  );

  constructor(
    private fileUploadService: FileUploadService,
    private actions$: Actions<fromFileUploadActions.Actions>
  ) {}

  private handleError(error: any) {
    const friendlyErrorMessage = serializeError(error).message;
    return new fromFileUploadActions.UploadErrorAction({
      error: friendlyErrorMessage
    });
  }

  private getActionFromHttpEvent(event: HttpEvent<any>) {
    switch (event.type) {
      case HttpEventType.Sent: {
        return new fromFileUploadActions.UploadStartedAction();
      }
      case HttpEventType.UploadProgress: {
        return new fromFileUploadActions.UploadProgressAction({
          progress: Math.round((100 * event.loaded) / event.total)
        });
      }
      case HttpEventType.ResponseHeader:
      case HttpEventType.Response: {
        if (event.status === 200) {
          return new fromFileUploadActions.UploadCompletedAction();
        } else {
          return new fromFileUploadActions.UploadErrorAction({
            error: event.statusText
          });
        }
      }
      default: {
        return new fromFileUploadActions.UploadErrorAction({
          error: `Unknown Event: ${JSON.stringify(event)}`
        });
      }
    }
  }

}
