import { Action } from '@ngrx/store';

export enum ActionTypes {
  UPLOAD_REQUEST = '[File Upload Form] Request',
  UPLOAD_STARTED = '[File Upload API] Started',
  UPLOAD_RESET = '[File Upload Form] Reset',
  UPLOAD_PROGRESS = '[File Upload API] Progress',
  UPLOAD_ERROR = '[File Upload API] Error',
  UPLOAD_COMPLETED = '[File Upload API] Success'
}

export class UploadRequestAction implements Action {
  readonly type = ActionTypes.UPLOAD_REQUEST;
  constructor(public payload: { file: File }) {}
}

export class UploadResetAction implements Action {
  readonly type = ActionTypes.UPLOAD_RESET;
}

export class UploadStartedAction implements Action {
  readonly type = ActionTypes.UPLOAD_STARTED;
}

export class UploadProgressAction implements Action {
  readonly type = ActionTypes.UPLOAD_PROGRESS;
  constructor(public payload: { progress: number }) {}
}

export class UploadErrorAction implements Action {
  readonly type = ActionTypes.UPLOAD_ERROR;
  constructor(public payload: { error: string }) {}
}

export class UploadCompletedAction implements Action {
  readonly type = ActionTypes.UPLOAD_COMPLETED;
}

export type Actions =
  | UploadRequestAction
  | UploadResetAction
  | UploadStartedAction
  | UploadProgressAction
  | UploadErrorAction
  | UploadCompletedAction;
