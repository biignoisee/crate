// Base UI (free tier) — https://base-ui.net
// Free to use in unlimited projects. Do not redistribute this source as a library, kit, or template collection.
// Full license terms: https://github.com/Base-ui-ng/base-ui/blob/main/LICENSE.md

import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { ChatMessage } from '../types';
import { cn } from '../tw-merge/tw-merge';
import { AvatarComponent } from '../avatar/avatar.component';
import { BadgeComponent } from '../badge/badge.component';
import { IconComponent } from '../icon/icon.component';
import { SpinnerComponent } from '../spinner/spinner.component';

/**
 * A single chat turn — user, assistant, system, or tool call.
 *
 * @example
 * <base-chat-message [message]="msg"></base-chat-message>
 */
@Component({
  selector: 'base-chat-message',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AvatarComponent, BadgeComponent, IconComponent, SpinnerComponent],
  templateUrl: './chat-message.component.html',
  host: { '[class]': 'hostCls()' },
})
export class ChatMessageComponent {
  /** Additional host classes. */
  readonly extraClass = input('', { alias: 'class' });

  /**
   * Message to render.
   * @example
   * <base-chat-message [message]="{ id: '1', role: 'user', content: 'Hi' }"></base-chat-message>
   */
  readonly message = input.required<ChatMessage>();

  protected readonly hostCls = computed(() => cn('flex w-full gap-3', this.extraClass()));

  readonly isUser = computed(() => this.message().role === 'user');
  readonly isTool = computed(() => this.message().role === 'tool');
  readonly isSystem = computed(() => this.message().role === 'system');

  readonly initials = computed(() => {
    const msg = this.message();
    if (msg.name) return msg.name.slice(0, 2).toUpperCase();
    if (msg.role === 'user') return 'You';
    if (msg.role === 'assistant') return 'AI';
    if (msg.role === 'tool') return 'Fn';
    return 'Sys';
  });

  readonly toolBadgeColor = computed(() => {
    switch (this.message().toolStatus) {
      case 'error':
        return 'danger';
      case 'done':
        return 'success';
      case 'running':
      case 'pending':
        return 'primary';
      default:
        return 'primary';
    }
  });
}
