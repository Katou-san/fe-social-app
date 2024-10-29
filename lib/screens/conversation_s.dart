import 'package:fe_social_app/configs/messConfig.dart';
import 'package:fe_social_app/models/mess_m.dart';
import 'package:fe_social_app/utils/Colors/colorHex.dart';
import 'package:flutter/material.dart';

class ConversationS extends StatefulWidget {
  const ConversationS({super.key});

  @override
  _ConversationSState createState() => _ConversationSState();
}

class _ConversationSState extends State<ConversationS> {
  List<MessageModel> list = [
    MessageModel(
        messId: 'rdgfgd',
        type: 0,
        content: 'hello world',
        replyId: '',
        userName: 'Hung',
        userId: 'idHung'),
    MessageModel(
        messId: 'rdgfgd',
        type: 1,
        content: 'hello world',
        replyId: '',
        userName: 'Test',
        userId: 'idTest'),
    MessageModel(
        messId: 'rdgfgd',
        type: 2,
        content: 'hello world',
        replyId: '',
        userName: 'Test',
        userId: 'idHung')
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: hexColor('182330'),
      appBar: AppBar(
        title: const Text('hello'),
      ),
      body: ListView.builder(
        reverse: true,
        itemCount: list.length,
        itemBuilder: (context, index) {
          return messageTypeWiget(list[index]);
        },
      ),
      bottomNavigationBar: Container(
        height: 60,
        color: hexColor('212F3F'),
        child: Row(
          children: [
            const Icon(Icons.face, color: Colors.white),
            Container(
              child: Flexible(
                child: TextField(
                  // controller: _findController,
                  decoration: InputDecoration(
                      hintText: 'Message...',
                      border: InputBorder.none,
                      hintStyle:
                          TextStyle(fontSize: 15, color: hexColor('6C808C'))),
                  style: const TextStyle(fontSize: 15, color: Colors.white),
                ),
              ),
            ),
            const Icon(Icons.link, color: Colors.white),
            const Icon(Icons.mic, color: Colors.white)
          ],
        ),
      ),
    );
  }
}
