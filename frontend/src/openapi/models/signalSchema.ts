/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */
import type { SignalSchemaPayload } from './signalSchemaPayload';
import type { SignalSchemaSource } from './signalSchemaSource';

/**
 * An object describing a signal.
 */
export interface SignalSchema {
    /** The date and time of when the signal was created. */
    createdAt: string;
    /** The ID of the source token that created this signal. Only present if the signal was created by a signal endpoint. */
    createdBySourceTokenId?: number | null;
    /** The signal's ID. Signal IDs are incrementing integers. In other words, a more recently created signal will always have a higher ID than an older one. */
    id: number;
    /** The payload of the signal. */
    payload?: SignalSchemaPayload;
    /** The signal source type. Should be used along with `sourceId` to uniquely identify the resource that created this signal. */
    source: SignalSchemaSource;
    /** The ID of the source that created this signal. Should be used along with `source` to uniquely identify the resource that created this signal. */
    sourceId: number;
}