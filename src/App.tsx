import React from "react";
import { usePolyfire } from "polyfire-js/hooks";
import Chat, { useChatContext } from "@polyfire-ai/chat-ui";
import { ChatOptions } from "polyfire-js/chats";

const ChatUI = () => {
  const { auth } = usePolyfire();
  const { utils, chat } = useChatContext();

  return (
    <>
      <Chat.Sidebar>
        <Chat.SidebarHeader />
        <Chat.NewChatButton />
        <Chat.ChatList />
        <Chat.SidebarButtonGroup>
          <Chat.LogoutButton onClick={() => auth.logout()} />
        </Chat.SidebarButtonGroup>
      </Chat.Sidebar>
      <Chat.View>
        <Chat.History
          HistoryItemComponent={Chat.RoundedChatListItem}
          HistoryLoadingComponent={Chat.RoundedHistoryLoadingComponent}
          HistoryEmptyComponent={Chat.HistoryEmptyComponent}
        />
        <Chat.ScrollToBottomButton
          disabled={chat.isAtBottom}
          onClick={utils.onScrollToBottom}
        />
        <Chat.Prompt>
          <Chat.Input autoFocus />
          <Chat.SendButton />
        </Chat.Prompt>
      </Chat.View>
    </>
  );
};

const options: ChatOptions = {
  systemPrompt: "Repond moi en Russe",
};

const App: React.FC = () => {
  return (
    <Chat.Root baseChatColor="#4682B4" options={options}>
      <ChatUI />
    </Chat.Root>
  );
};

export default App;
