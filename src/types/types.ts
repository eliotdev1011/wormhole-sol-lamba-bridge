export enum TransferState {
  Failed = -1,
  Created = 0, // The TokenTransfer object is created
  SourceInitiated, // Source chain transactions are submitted
  SourceFinalized, // Source chain transactions are finalized or whenever we have a message id
  InReview, // Transfer is in review (e.g. held by governor)
  Attested, // VAA or Circle Attestation is available
  Refunded, // Transfer failed and was refunded on the source chain
  DestinationInitiated, // Attestation is submitted to destination chain
  DestinationQueued, // Transfer is queued on destination chain
  DestinationFinalized, // Destination transaction is finalized
}
