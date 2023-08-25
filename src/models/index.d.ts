import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





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
  readonly eventCreatorUser?: string | null;
  readonly eventCreatorName?: string | null;
  readonly eventCreatorImage?: string | null;
  readonly eventCreatorBio?: string | null;
  readonly eventCreatorHeadline?: string | null;
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
  readonly eventCreatorUser?: string | null;
  readonly eventCreatorName?: string | null;
  readonly eventCreatorImage?: string | null;
  readonly eventCreatorBio?: string | null;
  readonly eventCreatorHeadline?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Events = LazyLoading extends LazyLoadingDisabled ? EagerEvents : LazyEvents

export declare const Events: (new (init: ModelInit<Events>) => Events) & {
  copyOf(source: Events, mutator: (draft: MutableModel<Events>) => MutableModel<Events> | void): Events;
}