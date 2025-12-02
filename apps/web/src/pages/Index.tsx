import { ChatContainer } from "@/components/chat/ChatContainer";
import { useRAGChat } from "@/hooks/useRAGChat";

const Index = () => {
  const { messages, isLoading, sendMessage } = useRAGChat();

  return (
    <main className="h-screen w-full">
      <ChatContainer
        messages={messages}
        onSendMessage={sendMessage}
        isLoading={isLoading}
      />
    </main>
  );
};

export default Index;
