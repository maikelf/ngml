/** Dataset */
export interface Dataset {
    application_type: string;
    description: string;
    fields: string;
    id: string;
    name: string;
    post_processed: boolean;
    post_processed_error: string;
    tenant: string;
    timestamp_field: string;
    timestamp_format: string;
    timestamp_tzone: string;
}
