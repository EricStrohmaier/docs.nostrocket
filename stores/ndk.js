import { defineStore } from "pinia"
import NDK from "@nostr-dev-kit/ndk"

export const useNdkStore = defineStore({
  id: 'ndk-store',
  state: () => {
    return {
      initialized: false,
      explicitRelayUrls: ["wss://nostr.sebastix.dev"],
      outboxRelayUrls: ["wss://purplepag.es"],
      enableOutboxModel: true,
      ndk: null
    }
  },
  actions: {
    async initNdk() {
      if (this.ndk === null) {
        this.ndk = new NDK({
          explicitRelayUrls: this.explicitRelayUrls,
          outboxRelayUrls: this.outboxRelayUrls,
          enableOutboxModel: this.enableOutboxModel
        })
        this.initialized = true
      }
    },
  }
})