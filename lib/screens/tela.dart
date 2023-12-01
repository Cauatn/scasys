import 'package:flutter/material.dart';
import 'package:scasys_1/components/input_pop_up_menu.dart';

class InitialScreen extends StatelessWidget {
  const InitialScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return const Scaffold(
      body: Center(
        child: PopupMenuExample(
          condicao: 'fase',
          containerWidth: 303,
        ),
      ),
    );
  }
}
