import 'package:fe_social_app/components/message/Reply_text_mess.dart';
import 'package:fe_social_app/components/message/Text_mes.dart';
import 'package:fe_social_app/components/message/Voice_mess.dart';
import 'package:fe_social_app/models/mess_m.dart';
import 'package:flutter/cupertino.dart';

String currentId = 'idTest';

dynamic messageTypeWiget(MessageModel mess) {
  List<Widget> listWiget = [
    TextMes(
      messInfo: mess,
    ),
    ReplyTextMess(
      messInfo: mess,
    ),
    VoiceMess(
      messInfo: mess,
    )
  ];
  return listWiget[mess.type];
}
