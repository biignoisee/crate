// Base UI (free tier) — https://base-ui.net
// Free to use in unlimited projects. Do not redistribute this source as a library, kit, or template collection.
// Full license terms: https://github.com/Base-ui-ng/base-ui/blob/main/LICENSE.md

import { ChangeDetectionStrategy, Component, booleanAttribute, computed, input, output } from '@angular/core';
import { ChatMessage } from '../types';
import { cn } from '../tw-merge/tw-merge';
import { ChatMessageComponent } from './chat-message.component';
import { ChatPromptComponent } from './chat-prompt.component';
import { EmptyStateComponent } from '../empty-state/empty-state.component';

/**
 * AI chat kit: message list, streaming cursor, tool-call rows, and a prompt composer.
 *
 * @example
 * <base-chat [messages]="thread" [streaming]="busy" (send)="ask($event)" (stop)="abort()"></base-chat>
 */
@Component({
  selector: 'base-chat',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ChatMessageComponent, ChatPromptComponent, EmptyStateComponent],
  templateUrl: './chat.component.html',
  host: { '[class]': 'hostCls()' },
})
export class ChatComponent {
  /**
   * Additional host classes.
   * @example
   * <base-chat class="min-h-120" [messages]="thread"></base-chat>
   */
  readonly extraClass = input('', { alias: 'class' });

  /**
   * Ordered conversation turns.
   * @example
   * <base-chat [messages]="[{ id: '1', role: 'user', content: 'Hello' }]"></base-chat>
   */
  readonly messages = input<ChatMessage[]>([]);

  /**
   * True while an assistant reply is streaming.
   * @example
   * <base-chat [streaming]="true" [messages]="thread"></base-chat>
   */
  readonly streaming = input(false, { transform: booleanAttribute });

  /**
   * Composer placeholder.
   * @example
   * <base-chat placeholder="Ask the docs…"></base-chat>
   */
  readonly placeholder = input('Send a message…');

  /**
   * Disables the composer.
   * @example
   * <base-chat disabled></base-chat>
   */
  readonly disabled = input(false, { transform: booleanAttribute });

  /**
   * Empty-state title when `messages` is empty.
   * @example
   * <base-chat emptyTitle="Ask anything"></base-chat>
   */
  readonly emptyTitle = input('How can I help?');

  /**
   * Empty-state description.
   * @example
   * <base-chat emptyDescription="Ask about your codebase."></base-chat>
   */
  readonly emptyDescription = input('Send a message to start the conversation.');

  /** Emits the user prompt. */
  readonly send = output<string>();

  /** Emits when the user stops generation. */
  readonly stop = output<void>();

  protected readonly hostCls = computed(() =>
    cn(
      'flex h-full min-h-105 flex-col overflow-hidden rounded-xl border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900',
      this.extraClass(),
    ),
  );
}

export type { ChatMessage };
