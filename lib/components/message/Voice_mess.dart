import 'package:fe_social_app/components/message/Comment_mess.dart';
import 'package:fe_social_app/components/message/Emoji_mess.dart';
import 'package:fe_social_app/configs/messConfig.dart';
import 'package:fe_social_app/models/mess_m.dart';
import 'package:flutter/material.dart';

class VoiceMess extends StatefulWidget {
  VoiceMess({super.key, required this.messInfo});
  MessageModel messInfo;
  @override
  _VoiceMessState createState() => _VoiceMessState();
}

class _VoiceMessState extends State<VoiceMess> {
  @override
  Widget build(BuildContext context) {
    return Row(
      textDirection: currentId == widget.messInfo.userId
          ? TextDirection.rtl
          : TextDirection.ltr,
      mainAxisSize: MainAxisSize.min,
      crossAxisAlignment: CrossAxisAlignment.end,
      children: [
        currentId != widget.messInfo.userId
            ? Container(
                margin: const EdgeInsets.all(3),
                height: 30,
                width: 30,
                decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(50),
                    image: const DecorationImage(
                        image: NetworkImage(
                            'https://media.istockphoto.com/id/177512311/vi/anh/n%E1%BB%81n-kh%C3%B4ng-gian-sao-v%C5%A9-tr%E1%BB%A5-thi%C3%AAn-h%C3%A0-v%C3%A0-tinh-v%C3%A2n.webp?s=2048x2048&w=is&k=20&c=CDdW-fSLM7Bw_a4kGcpQzIec0j7zEqpTaaFcRAK4tjs='),
                        fit: BoxFit.cover)),
              )
            : Container(width: 2),
        Container(
            margin: const EdgeInsets.all(3),
            constraints: const BoxConstraints(minWidth: 0, maxWidth: 220),
            padding:
                const EdgeInsets.only(top: 10, left: 15, right: 10, bottom: 10),
            decoration: BoxDecoration(
                color: const Color.fromARGB(255, 40, 44, 47),
                borderRadius: BorderRadius.circular(20)),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Container(
                    child: Text(
                  widget.messInfo.userName,
                  style: const TextStyle(
                      color: Color.fromARGB(255, 144, 71, 255),
                      fontSize: 15,
                      fontWeight: FontWeight.w600),
                )),
                Row(
                  children: [
                    Container(
                        margin: const EdgeInsets.only(top: 10, bottom: 10),
                        height: 40,
                        width: 40,
                        decoration: BoxDecoration(
                            color: Colors.amber,
                            borderRadius: BorderRadius.circular(50)),
                        child: Icon(Icons.play_arrow)),
                  ],
                ),
                EmojiMess(),
                Container(
                  alignment: Alignment.bottomRight,
                  child: const Text(
                    '11:02',
                    style: TextStyle(
                        fontSize: 13,
                        fontWeight: FontWeight.w500,
                        color: Color.fromARGB(235, 132, 132, 132)),
                  ),
                ),
                CommentMess(),
              ],
            )),
        Container(
          margin: const EdgeInsets.all(3),
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(50),
            color: const Color.fromARGB(255, 40, 44, 47),
          ),
          height: 35,
          width: 35,
          child: const Icon(
            Icons.share,
            color: Colors.white,
            size: 17,
          ),
        )
      ],
    );
  }
}
