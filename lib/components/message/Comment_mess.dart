import 'package:flutter/material.dart';

class CommentMess extends StatefulWidget {
  const CommentMess({Key? key}) : super(key: key);

  @override
  _CommentMessState createState() => _CommentMessState();
}

class _CommentMessState extends State<CommentMess> {
  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.only(top: 5),
      child: const Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Text(
            'Commnet',
            style: TextStyle(fontWeight: FontWeight.w600, color: Colors.white),
          ),
          Icon(Icons.arrow_right_outlined)
        ],
      ),
    );
  }
}
