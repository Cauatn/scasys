import 'package:flutter/material.dart';
import 'package:scasys_1/components/text_input.dart';

class InitialScreen extends StatelessWidget {
  const InitialScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return const Scaffold(
      body: TextInputBox(),
    );
  }
}
