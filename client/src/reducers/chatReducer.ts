import { IMessage } from "../types/chat";
import { ADD_MESSAGE, ADD_HISTORY, TOGGLE_CHAT } from "./chatActions";

export interface ChatState {
  messages: IMessage[];
  isChatOpen: boolean;
}

export type ChatAction =
  | {
      type: typeof ADD_MESSAGE;
      payload: { message: IMessage };
    }
  | {
      type: typeof ADD_HISTORY;
      payload: { history: IMessage[] };
    }
  | {
      type: typeof TOGGLE_CHAT;
      payload: { isOpen: boolean };
    };

export const addMessageAction = (message: IMessage): ChatAction => ({
  type: ADD_MESSAGE,
  payload: { message },
});

export const addHistoryAction = (history: IMessage[]): ChatAction => ({
  type: ADD_HISTORY,
  payload: { history },
});

export const toggleChatAction = (isOpen: boolean): ChatAction => ({
  type: TOGGLE_CHAT,
  payload: { isOpen },
});

export const chatReducer = (state: ChatState, action: ChatAction): ChatState => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload.message],
      };
    case ADD_HISTORY:
      return {
        ...state,
        messages: action.payload.history,
      };
    case TOGGLE_CHAT:
      return {
        ...state,
        isChatOpen: action.payload.isOpen,
      };
    default:
      return state;
  }
};
