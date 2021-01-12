import { MessageState } from "@shared/helpers";

export const conversations = [
  {
    _id: "1",
    name: undefined,
    type: undefined,
    participants: [
      {
        _id: "1", // user ID
        phone: "+212690 344426",
        alias: "alias 1",
      },
      {
        _id: "2", // user ID
        phone: "+212669XXXXXX",
        alias: "Zak Xxxxxx",
      },
    ],
    setting: {},
    lastMessage: {
      _id: "1",
      message: "Khssara kakan ghir React blasst Angular dakchi tayban b3a9lo",
      timestamp: "00:46",
      state: MessageState.Sended,
    },
  },
  {
    _id: "2",
    name: undefined,
    participants: [
      {
        _id: "1", // user ID
        phone: "+212690 344426",
        alias: "alias 1",
      },
      {
        _id: "3", // user ID
        phone: "+2126XXXXXX83",
        alias: undefined,
      },
    ],
    setting: {},
    lastMessage: {
      _id: "2",
      message: "Ok",
      timestamp: "16/09/2020",
      state: MessageState.Sended,
    },
  },
  {
    _id: "3",
    name: undefined,
    participants: [
      {
        _id: "1", // user ID
        phone: "+212690 344426",
        alias: "alias 1",
      },
      {
        _id: "4", // user ID
        phone: "+2126XXXXXX28",
        alias: "Ayoub El Khxxxxxx",
      },
    ],
    setting: {},
    lastMessage: {
      _id: "3",
      message: "Ta ana chal hadi mhdrt m3ah",
      timestamp: "17/07/2020",
      state: MessageState.Received,
    },
  },
];
