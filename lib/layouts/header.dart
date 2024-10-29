import 'dart:ui';

import 'package:fe_social_app/components/header/itemStoryInput.dart';
import 'package:fe_social_app/customs/layoutItemMimi.dart';
import 'package:fe_social_app/utils/Colors/colorHex.dart';
import 'package:flutter/material.dart';

class Header extends StatefulWidget {
  Header({super.key});

  @override
  _HeaderState createState() => _HeaderState();
}

class _HeaderState extends State<Header> {
  @override
  Widget build(BuildContext context) {
    TextEditingController _findController = TextEditingController(text: '');
    return Container(
      margin: const EdgeInsets.only(top: 25),
      child: Column(
        children: [
          Container(
              margin: const EdgeInsets.fromLTRB(10, 0, 10, 0),
              padding: const EdgeInsets.fromLTRB(0, 5, 0, 5),
              decoration: BoxDecoration(
                  color: hexColor('FF182330'),
                  borderRadius: BorderRadius.circular(40)),
              child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Container(padding: const EdgeInsets.only(left: 10)),
                    Flexible(
                      child: TextField(
                        controller: _findController,
                        decoration: InputDecoration(
                            hintText: 'find',
                            border: InputBorder.none,
                            hintStyle: TextStyle(
                                fontSize: 15, color: hexColor('6C808C'))),
                        style:
                            const TextStyle(fontSize: 15, color: Colors.white),
                      ),
                    ),
                    LayoutItemMimi(),
                    Container(padding: const EdgeInsets.only(left: 10)),
                  ]))
        ],
      ),
    );
  }
}
