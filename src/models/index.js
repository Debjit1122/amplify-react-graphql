// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { CreateEvent } = initSchema(schema);

export {
  CreateEvent
};