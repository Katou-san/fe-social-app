import 'package:fe_social_app/layouts/conversation.dart';
import 'package:fe_social_app/layouts/header.dart';
import 'package:fe_social_app/layouts/tabs.dart';
import 'package:fe_social_app/utils/Colors/colorHex.dart';
import 'package:flutter/material.dart';

class Main extends StatelessWidget {
  const Main({super.key});

  @override
  Widget build(BuildContext context) {
    List<int> list = [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
    ];

    double height = MediaQuery.sizeOf(context).height;
    var padding = MediaQuery.paddingOf(context);
    double newheight = height - padding.top - padding.bottom;
    return Scaffold(
      backgroundColor: hexColor('212F3F'),
      body: ListView(
        scrollDirection: Axis.vertical,
        children: [
          Header(),
          Container(
            height: 20,
          ),
          Tabs(),
          ConstrainedBox(
            constraints: const BoxConstraints(minHeight: 300, maxHeight: 500),
            child: ListView.builder(
                scrollDirection: Axis.vertical,
                itemCount: list.length,
                itemBuilder: (context, index) {
                  return Conversation();
                }),
          ),
        ],
      ),
    );
  }
}
