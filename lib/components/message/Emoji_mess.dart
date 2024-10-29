import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class EmojiMess extends StatefulWidget {
  const EmojiMess({super.key});

  @override
  _EmojiMessState createState() => _EmojiMessState();
}

class _EmojiMessState extends State<EmojiMess> {
  @override
  Widget build(BuildContext context) {
    List<int> list = [1, 2, 3, 1, 4];
    return Container(
      margin: const EdgeInsets.only(top: 10),
      child: Wrap(
        runSpacing: 5.0,
        spacing: 5.0,
        children: [
          for (int i = 0; i < list.length; i++)
            Container(
              constraints: const BoxConstraints(minWidth: 0, maxWidth: 60),
              margin: const EdgeInsets.only(right: 1),
              padding:
                  const EdgeInsets.only(top: 3, bottom: 3, left: 4, right: 4),
              decoration: BoxDecoration(
                  color: Colors.black38,
                  borderRadius: BorderRadius.circular(20)),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.center,
                crossAxisAlignment: CrossAxisAlignment.center,
                children: [
                  Icon(
                    Icons.abc,
                    size: 25,
                  ),
                  Container(width: 3),
                  Text(
                    '18k',
                    style: TextStyle(color: Colors.white, fontSize: 13),
                  )
                ],
              ),
            )
        ],
      ),
    );
  }
}
