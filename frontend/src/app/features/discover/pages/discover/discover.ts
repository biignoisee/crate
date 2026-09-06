import { Component, signal } from '@angular/core';
import { ChatComponent } from '@components/chat/chat.component';
import type { ChatMessage } from '@components/chat/chat.component';

@Component({
  selector: 'app-discover',
  imports: [ChatComponent],
  templateUrl: './discover.html',
  styleUrl: './discover.css',
})
export default class Discover {
  readonly messages = signal<ChatMessage[]>([
    { id: crypto.randomUUID(), role: 'assistant', content: 'What have you been listening to recently?' },
  ]);
  readonly streaming = signal(false);

  onSend(text: string) {
    this.messages.update((list) => [
      ...list,
      { id: crypto.randomUUID(), role: 'user', content: text },
    ]);

    this.streaming.set(true);

    // Placeholder — wire up the real RAG/model call here later
    setTimeout(() => {
      this.messages.update((list) => [
        ...list,
        {
          id: crypto.randomUUID(),
          role: 'assistant',
          content: "Got it — I'll use that to shape your recommendations soon.",
        },
      ]);
      this.streaming.set(false);
    }, 600);
  }

  stop() {
    this.streaming.set(false);
  }
}
