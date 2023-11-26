// import { defineStore } from 'pinia';
// import NDK from '@nostr-dev-kit/ndk';
// import { Event } from 'nostr-tools';

// interface NdkStoreState {
//   initialized: boolean;
//   explicitRelayUrls: string[];
//   outboxRelayUrls: string[];
//   enableOutboxModel: boolean;
//   ndk: NDK | null; 
//   listEvents: Event[];
//   isLoading: boolean;
// }

// export const useNdkStore = defineStore({
//   id: 'ndk-store',
//   state: (): NdkStoreState => ({
//     initialized: false,
//     explicitRelayUrls: ['wss://nostr.sebastix.dev'],
//     outboxRelayUrls: ['wss://purplepag.es'],
//     enableOutboxModel: true,
//     ndk: null,
//     listEvents: [],
//     isLoading: false,
//   }),
//   actions: {
//     async initNdk(this: NdkStoreState) {
//       if (this.ndk === null) {
//         this.ndk = new NDK({
//           explicitRelayUrls: this.explicitRelayUrls,
//           outboxRelayUrls: this.outboxRelayUrls,
//           enableOutboxModel: this.enableOutboxModel,
//         });
//         this.initialized = true;
//       }
//     },
//     setListEvents(list: Event[]) {
//       // Update the list and mark the store as loading
//       this.listEvents = list;
//       this.setLoadingStatus(true);

//       // Optionally, persist the data in localStorage
//       localStorage.setItem('listEvents', JSON.stringify(list));

//       // Mark the store as not loading
//       this.setLoadingStatus(false);
//     },
//     setLoadingStatus(status: boolean) {
//       this.isLoading = status;
//     },
//   },
//   },
// );
