import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { select, Store } from '@ngrx/store';
import * as fromFileUploadState from 'src/app/file-upload-store/state';
import * as fromFileUploadSelectors from 'src/app/file-upload-store/selectors';
import {Observable} from 'rxjs';
import * as fromFileUploadActions from 'src/app/file-upload-store/actions';

@Component({
  selector: 'app-new-file-modal',
  templateUrl: './new-file-modal.component.html',
  styleUrls: ['./new-file-modal.component.scss']
})
export class NewFileModalComponent implements OnInit {
  completed$: Observable<boolean>;
  progress$: Observable<number>;
  error$: Observable<string>;

  isInProgress$: Observable<boolean>;
  isReady$: Observable<boolean>;
  hasFailed$: Observable<boolean>;

  constructor(public activeModal: NgbActiveModal,
              private store$: Store<fromFileUploadState.State>) { }

  ngOnInit() {
    this.completed$ = this.store$.pipe(
      select(fromFileUploadSelectors.selectUploadFileCompleted)
    );

    this.progress$ = this.store$.pipe(
      select(fromFileUploadSelectors.selectUploadFileProgress)
    );

    this.error$ = this.store$.pipe(
      select(fromFileUploadSelectors.selectUploadFileError)
    );

    this.isInProgress$ = this.store$.pipe(
      select(fromFileUploadSelectors.selectUploadFileInProgress)
    );

    this.isReady$ = this.store$.pipe(
      select(fromFileUploadSelectors.selectUploadFileReady)
    );

    this.hasFailed$ = this.store$.pipe(
      select(fromFileUploadSelectors.selectUploadFileFailed)
    );
  }

  uploadFile(event: any) {
    const files: FileList = event.target.files;
    const file = files.item(0);
    this.store$.dispatch(
      new fromFileUploadActions.UploadRequestAction({
        file
      })
    );
    event.srcElement.value = null;
  }

  resetUpload() {
    this.store$.dispatch(new fromFileUploadActions.UploadResetAction());
  }

  onClose() {
    this.resetUpload();
    this.activeModal.dismiss('Cross click');
  }
}
