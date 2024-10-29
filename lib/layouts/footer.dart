import 'dart:developer';

import 'package:fe_social_app/configs/footbarConfig.dart';
import 'package:fe_social_app/icons/listIcon_Fig.dart';
import 'package:fe_social_app/utils/Colors/colorHex.dart';
import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

class Footer extends StatefulWidget {
  Footer({super.key, required this.navigationShell});
  final StatefulNavigationShell navigationShell;
  @override
  _FooterState createState() => _FooterState();
}

class _FooterState extends State<Footer> {
  @override
  void initState() {
    super.initState();
  }

  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        color: hexColor('212F3F'),
      ),
      height: 60,
      padding: const EdgeInsets.only(top: 10, bottom: 10, left: 40, right: 40),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          for (int i = 0; i < FootbarConfig.length; i++)
            InkWell(
              onTap: () {
                setState(() {
                  widget.navigationShell.goBranch(i);
                });
              },
              child: Column(
                children: [
                  Text(
                    FootbarConfig[i].title,
                    style: TextStyle(
                        color: widget.navigationShell.currentIndex == i
                            ? Colors.white
                            : Colors.amber,
                        fontWeight: FontWeight.w500),
                  )
                ],
              ),
            )
        ],
      ),
    );
  }
}
