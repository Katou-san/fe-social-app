import 'package:fe_social_app/configs/routeConfig.dart';
import 'package:fe_social_app/layouts/footer.dart';
import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp.router(routerConfig: routeConfig);
  }
}
