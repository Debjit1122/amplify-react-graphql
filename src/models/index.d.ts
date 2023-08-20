import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerCreateEvent = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CreateEvent, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly detailedInfo?: string | null;
  readonly Country?: string | null;
  readonly mode?: string | null;
  readonly type?: string | null;
  readonly dateTime?: string | null;
  readonly venue?: string | null;
  readonly orgName?: string | null;
  readonly orgEmail?: string | null;
  readonly orgPhone?: string | null;
  readonly endDate?: string | null;
  readonly ticketPrice?: number | null;
  readonly orgDesc?: string | null;
  readonly orgAddress?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCreateEvent = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CreateEvent, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly detailedInfo?: string | null;
  readonly Country?: string | null;
  readonly mode?: string | null;
  readonly type?: string | null;
  readonly dateTime?: string | null;
  readonly venue?: string | null;
  readonly orgName?: string | null;
  readonly orgEmail?: string | null;
  readonly orgPhone?: string | null;
  readonly endDate?: string | null;
  readonly ticketPrice?: number | null;
  readonly orgDesc?: string | null;
  readonly orgAddress?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type CreateEvent = LazyLoading extends LazyLoadingDisabled ? EagerCreateEvent : LazyCreateEvent

export declare const CreateEvent: (new (init: ModelInit<CreateEvent>) => CreateEvent) & {
  copyOf(source: CreateEvent, mutator: (draft: MutableModel<CreateEvent>) => MutableModel<CreateEvent> | void): CreateEvent;
}