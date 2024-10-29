import 'package:fe_social_app/components/message/Comment_mess.dart';
import 'package:fe_social_app/components/message/Emoji_mess.dart';
import 'package:fe_social_app/configs/messConfig.dart';
import 'package:fe_social_app/models/mess_m.dart';
import 'package:flutter/material.dart';

class ReplyTextMess extends StatefulWidget {
  ReplyTextMess({super.key, required this.messInfo});
  MessageModel messInfo;
  @override
  _ReplyTextMessState createState() => _ReplyTextMessState();
}

class _ReplyTextMessState extends State<ReplyTextMess> {
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
                Container(
                  margin: const EdgeInsets.only(top: 2, bottom: 5),
                  decoration: BoxDecoration(
                      color: Colors.black26,
                      borderRadius: BorderRadius.circular(10)),
                  height: 45,
                  child: Row(
                    children: [
                      Container(
                        decoration: BoxDecoration(
                            color: Colors.amber,
                            borderRadius: BorderRadius.circular(10)),
                        width: 4,
                        height: 42,
                        margin: const EdgeInsets.only(right: 5),
                      ),
                      Row(
                        mainAxisAlignment: MainAxisAlignment.start,
                        children: [
                          Column(
                            mainAxisAlignment: MainAxisAlignment.center,
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Text(
                                widget.messInfo.userName,
                                style: const TextStyle(
                                    fontWeight: FontWeight.w500,
                                    color: Colors.white),
                              ),
                              Text(
                                widget.messInfo.content,
                                style: const TextStyle(color: Colors.white),
                              )
                            ],
                          )
                        ],
                      )
                    ],
                  ),
                ),
                Row(
                  mainAxisSize: MainAxisSize.min,
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Flexible(
                      child: Container(
                        padding: const EdgeInsets.only(right: 13.0),
                        child: Text(
                          widget.messInfo.content,
                          softWrap: true,
                          style: const TextStyle(
                            fontSize: 15.0,
                            color: Color.fromARGB(255, 241, 241, 241),
                          ),
                        ),
                      ),
                    ),
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
