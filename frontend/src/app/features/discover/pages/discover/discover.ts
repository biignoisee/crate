import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

@Component({
  selector: 'app-discover',
  imports: [FormsModule],
  templateUrl: './discover.html',
  styleUrl: './discover.css',
})
export default class Discover {
  readonly draft = signal('');
  readonly messages = signal<ChatMessage[]>([
    { role: 'assistant', content: 'What have you been listening to recently?' },
  ]);

  send() {
    const text = this.draft().trim();
    if (!text) return;

    this.messages.update((msgs) => [...msgs, { role: 'user', content: text }]);
    this.draft.set('');

    // Placeholder response — wire up the RAG call here later
    setTimeout(() => {
      this.messages.update((msgs) => [
        ...msgs,
        { role: 'assistant', content: "Got it — I'll use that to shape your recommendations soon." },
      ]);
    }, 400);
  }
}
