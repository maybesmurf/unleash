/**
 * Generated by orval v6.10.3 🍺
 * Do not edit manually.
 * Unleash API
 * OpenAPI spec version: 4.20.0-beta.2
 */
import type { PlaygroundStrategySchemaResultAnyOf } from './playgroundStrategySchemaResultAnyOf';
import type { PlaygroundStrategySchemaResultAnyOfFour } from './playgroundStrategySchemaResultAnyOfFour';

/**
 * The strategy's evaluation result. If the strategy is a custom strategy that Unleash can't evaluate, `evaluationStatus` will be `unknown`. Otherwise, it will be `true` or `false`
 */
export type PlaygroundStrategySchemaResult =
    | PlaygroundStrategySchemaResultAnyOf
    | PlaygroundStrategySchemaResultAnyOfFour;
