import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerAttendees = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Attendees, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly attendeeName?: string | null;
  readonly attendeeAge?: number | null;
  readonly attendeeDOB?: string | null;
  readonly attendeeGender?: string | null;
  readonly attendeeEmail?: string | null;
  readonly attendeePhone?: string | null;
  readonly attendeeStreetAddress?: string | null;
  readonly attendeeCity?: string | null;
  readonly attendeeState?: string | null;
  readonly attendeeZipCode?: string | null;
  readonly attendeeCountry?: string | null;
  readonly attendeeCompanyName?: string | null;
  readonly attendeeJobTitle?: string | null;
  readonly attendeeCompanySize?: string | null;
  readonly attendeeReferral?: string | null;
  readonly attendeeQuestions?: string | null;
  readonly Events?: (AttendeesEvents | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAttendees = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Attendees, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly attendeeName?: string | null;
  readonly attendeeAge?: number | null;
  readonly attendeeDOB?: string | null;
  readonly attendeeGender?: string | null;
  readonly attendeeEmail?: string | null;
  readonly attendeePhone?: string | null;
  readonly attendeeStreetAddress?: string | null;
  readonly attendeeCity?: string | null;
  readonly attendeeState?: string | null;
  readonly attendeeZipCode?: string | null;
  readonly attendeeCountry?: string | null;
  readonly attendeeCompanyName?: string | null;
  readonly attendeeJobTitle?: string | null;
  readonly attendeeCompanySize?: string | null;
  readonly attendeeReferral?: string | null;
  readonly attendeeQuestions?: string | null;
  readonly Events: AsyncCollection<AttendeesEvents>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Attendees = LazyLoading extends LazyLoadingDisabled ? EagerAttendees : LazyAttendees

export declare const Attendees: (new (init: ModelInit<Attendees>) => Attendees) & {
  copyOf(source: Attendees, mutator: (draft: MutableModel<Attendees>) => MutableModel<Attendees> | void): Attendees;
}

type EagerEvents = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Events, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly eventTitle?: string | null;
  readonly eventType?: string | null;
  readonly eventCategory?: string | null;
  readonly eventTags?: string | null;
  readonly eventStartDate?: string | null;
  readonly eventStartTime?: string | null;
  readonly eventDesc?: string | null;
  readonly eventAgenda?: string | null;
  readonly eventSpeakers?: string | null;
  readonly eventEndDate?: string | null;
  readonly eventEndTime?: string | null;
  readonly eventTimeZone?: string | null;
  readonly eventVenueName?: string | null;
  readonly eventCountry?: string | null;
  readonly eventStreetAddress?: string | null;
  readonly eventCity?: string | null;
  readonly eventState?: string | null;
  readonly eventZipCode?: number | null;
  readonly eventTicketQuantity?: number | null;
  readonly eventTicketCurrency?: string | null;
  readonly eventTicketPrice?: number | null;
  readonly eventTicketSaleStart?: string | null;
  readonly eventTicketSaleEnd?: string | null;
  readonly promoLinkedin?: string | null;
  readonly promoTwitter?: string | null;
  readonly promoFacebook?: string | null;
  readonly promoInstagram?: string | null;
  readonly promoDiscord?: string | null;
  readonly promoDiscountType?: string | null;
  readonly promoDiscountAmount?: number | null;
  readonly promoDiscountCode?: string | null;
  readonly promoDiscountExpiration?: string | null;
  readonly orgName?: string | null;
  readonly orgEmail?: string | null;
  readonly orgCountryCode?: string | null;
  readonly orgPhone?: string | null;
  readonly orgWebsite?: string | null;
  readonly eventCodeofConduct?: string | null;
  readonly eventLogo?: string | null;
  readonly eventImage?: string | null;
  readonly eventVirtualURL?: string | null;
  readonly eventCreatorName?: string | null;
  readonly eventCreatorImage?: string | null;
  readonly eventCreatorBio?: string | null;
  readonly eventCreatorHeadline?: string | null;
  readonly owner?: string | null;
  readonly attendeess?: (AttendeesEvents | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEvents = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Events, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly eventTitle?: string | null;
  readonly eventType?: string | null;
  readonly eventCategory?: string | null;
  readonly eventTags?: string | null;
  readonly eventStartDate?: string | null;
  readonly eventStartTime?: string | null;
  readonly eventDesc?: string | null;
  readonly eventAgenda?: string | null;
  readonly eventSpeakers?: string | null;
  readonly eventEndDate?: string | null;
  readonly eventEndTime?: string | null;
  readonly eventTimeZone?: string | null;
  readonly eventVenueName?: string | null;
  readonly eventCountry?: string | null;
  readonly eventStreetAddress?: string | null;
  readonly eventCity?: string | null;
  readonly eventState?: string | null;
  readonly eventZipCode?: number | null;
  readonly eventTicketQuantity?: number | null;
  readonly eventTicketCurrency?: string | null;
  readonly eventTicketPrice?: number | null;
  readonly eventTicketSaleStart?: string | null;
  readonly eventTicketSaleEnd?: string | null;
  readonly promoLinkedin?: string | null;
  readonly promoTwitter?: string | null;
  readonly promoFacebook?: string | null;
  readonly promoInstagram?: string | null;
  readonly promoDiscord?: string | null;
  readonly promoDiscountType?: string | null;
  readonly promoDiscountAmount?: number | null;
  readonly promoDiscountCode?: string | null;
  readonly promoDiscountExpiration?: string | null;
  readonly orgName?: string | null;
  readonly orgEmail?: string | null;
  readonly orgCountryCode?: string | null;
  readonly orgPhone?: string | null;
  readonly orgWebsite?: string | null;
  readonly eventCodeofConduct?: string | null;
  readonly eventLogo?: string | null;
  readonly eventImage?: string | null;
  readonly eventVirtualURL?: string | null;
  readonly eventCreatorName?: string | null;
  readonly eventCreatorImage?: string | null;
  readonly eventCreatorBio?: string | null;
  readonly eventCreatorHeadline?: string | null;
  readonly owner?: string | null;
  readonly attendeess: AsyncCollection<AttendeesEvents>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Events = LazyLoading extends LazyLoadingDisabled ? EagerEvents : LazyEvents

export declare const Events: (new (init: ModelInit<Events>) => Events) & {
  copyOf(source: Events, mutator: (draft: MutableModel<Events>) => MutableModel<Events> | void): Events;
}

type EagerAttendeesEvents = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AttendeesEvents, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly attendeesId?: string | null;
  readonly eventsId?: string | null;
  readonly attendees: Attendees;
  readonly events: Events;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAttendeesEvents = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AttendeesEvents, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly attendeesId?: string | null;
  readonly eventsId?: string | null;
  readonly attendees: AsyncItem<Attendees>;
  readonly events: AsyncItem<Events>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type AttendeesEvents = LazyLoading extends LazyLoadingDisabled ? EagerAttendeesEvents : LazyAttendeesEvents

export declare const AttendeesEvents: (new (init: ModelInit<AttendeesEvents>) => AttendeesEvents) & {
  copyOf(source: AttendeesEvents, mutator: (draft: MutableModel<AttendeesEvents>) => MutableModel<AttendeesEvents> | void): AttendeesEvents;
}