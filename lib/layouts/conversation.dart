import 'package:fe_social_app/configs/routeConfig.dart';
import 'package:fe_social_app/utils/Colors/colorHex.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
import 'package:go_router/go_router.dart';

class Conversation extends StatefulWidget {
  const Conversation({super.key});

  @override
  _ConversationState createState() => _ConversationState();
}

class _ConversationState extends State<Conversation> {
  @override
  Widget build(BuildContext context) {
    return InkWell(
        onTap: () {
          context.go(Routes.ConversationPage);
        },
        child: Container(
          width: double.maxFinite,
          padding: const EdgeInsets.fromLTRB(5, 5, 5, 5),
          height: 80,
          color: hexColor('212F3F'),
          child: Row(
            children: [
              Container(
                height: 60,
                width: 60,
                decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(50),
                    image: const DecorationImage(
                        image: NetworkImage(
                            'https://media.istockphoto.com/id/177512311/vi/anh/n%E1%BB%81n-kh%C3%B4ng-gian-sao-v%C5%A9-tr%E1%BB%A5-thi%C3%AAn-h%C3%A0-v%C3%A0-tinh-v%C3%A2n.webp?s=2048x2048&w=is&k=20&c=CDdW-fSLM7Bw_a4kGcpQzIec0j7zEqpTaaFcRAK4tjs='),
                        fit: BoxFit.cover)),
              ),
              Container(
                  width: 210,
                  padding: const EdgeInsets.only(left: 10, right: 10),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Column(
                        mainAxisAlignment: MainAxisAlignment.center,
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Container(
                              child: const Text(
                            'Name',
                            style: TextStyle(
                                fontSize: 16,
                                color: Colors.white,
                                fontWeight: FontWeight.w500),
                          )),
                          Container(
                            child: Text(
                              'Name',
                              style: TextStyle(
                                  fontSize: 14, color: hexColor('6C808C')),
                            ),
                          ),
                        ],
                      ),
                    ],
                  )),
              Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  const Text('11:03',
                      style: TextStyle(fontSize: 13, color: Colors.white)),
                  const SizedBox(height: 2),
                  Container(
                    alignment: Alignment.center,
                    padding: const EdgeInsets.only(
                        left: 5, right: 5, top: 3, bottom: 3),
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(50),
                      color: Colors.white30,
                    ),
                    child: Text('1333'),
                  )
                ],
              )
            ],
          ),
        ));
  }
}
