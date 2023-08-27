// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Attendees, Events, AttendeesEvents } = initSchema(schema);

export {
  Attendees,
  Events,
  AttendeesEvents
};