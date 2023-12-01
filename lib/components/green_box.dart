import 'package:flutter/material.dart';

class GreenBox extends StatelessWidget {
  const GreenBox({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 5.8,
      height: 40,
      decoration: const BoxDecoration(color: Colors.green),
    );
  }
}
