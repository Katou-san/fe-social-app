import 'package:fe_social_app/screens/conversation_s.dart';
import 'package:fe_social_app/screens/layoutScaffold.dart';
import 'package:fe_social_app/screens/main_s.dart';
import 'package:fe_social_app/screens/test_s.dart';
import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

class Routes {
  Routes._();
  static const String MainPage = '/main';
  static const String TestPage = '/test';
  static const String ConversationPage = '/conversation';
}

final _rootNavigatorKey = GlobalKey<NavigatorState>(debugLabel: 'root');
final GoRouter routeConfig = GoRouter(
    navigatorKey: _rootNavigatorKey,
    initialLocation: Routes.MainPage,
    routes: [
      GoRoute(
          path: Routes.ConversationPage,
          builder: (context, state) => ConversationS()),
      StatefulShellRoute.indexedStack(
        builder: (context, state, navigationShell) => LayoutScaffold(
          navigationShell: navigationShell,
        ),
        branches: [
          StatefulShellBranch(routes: [
            GoRoute(path: Routes.MainPage, builder: (context, state) => Main())
          ]),
          StatefulShellBranch(routes: [
            GoRoute(path: Routes.TestPage, builder: (context, state) => TestS())
          ])
        ],
      ),
    ]);
