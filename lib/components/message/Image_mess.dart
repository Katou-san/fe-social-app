import 'package:fe_social_app/components/message/Comment_mess.dart';
import 'package:fe_social_app/components/message/Emoji_mess.dart';
import 'package:flutter/cupertino.dart';

class ImageMess extends StatefulWidget {
  const ImageMess({Key? key}) : super(key: key);

  @override
  _ImageMessState createState() => _ImageMessState();
}

class _ImageMessState extends State<ImageMess> {
  List<int> quanlity = [1, 2, 3, 4, 5];
  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        Container(
            child: Column(
          children: [
            Row(
              children: [],
            ),
            Row(
              children: [],
            ),
            Row(
              children: [],
            ),
            Container(
                child: Text(
              'hello',
              style: const TextStyle(
                  color: Color.fromARGB(255, 144, 71, 255),
                  fontSize: 15,
                  fontWeight: FontWeight.w600),
            )),
            Row(
              mainAxisSize: MainAxisSize.min,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Flexible(
                  child: Container(
                    padding: const EdgeInsets.only(right: 13.0),
                    child: Text(
                      'content',
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
        ))
      ],
    );
  }
}
