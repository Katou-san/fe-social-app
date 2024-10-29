import 'package:fe_social_app/configs/footbarConfig.dart';
import 'package:fe_social_app/layouts/footer.dart';
import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

class LayoutScaffold extends StatelessWidget {
  LayoutScaffold({super.key, required this.navigationShell});
  final StatefulNavigationShell navigationShell;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: navigationShell,
        bottomNavigationBar: Footer(navigationShell: navigationShell));
  }
}
