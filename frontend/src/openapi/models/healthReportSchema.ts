/**
 * Generated by orval v6.10.3 🍺
 * Do not edit manually.
 * Unleash API
 * OpenAPI spec version: 4.20.0-beta.2
 */
import type { FeatureSchema } from './featureSchema';

export interface HealthReportSchema {
    version: number;
    name: string;
    description?: string;
    members?: number;
    health?: number;
    environments?: string[];
    features?: FeatureSchema[];
    updatedAt?: string | null;
    favorite?: boolean;
    potentiallyStaleCount: number;
    activeCount: number;
    staleCount: number;
}
