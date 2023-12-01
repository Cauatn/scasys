import 'package:flutter/material.dart';
<<<<<<< HEAD
import 'package:scasys_1/components/text_input.dart';
=======
import 'package:scasys_1/components/input_pop_up_menu.dart';
import 'package:scasys_1/components/register_box.dart';
>>>>>>> c454e812567a9c15fa59216bb383a95976dfdd80

class InitialScreen extends StatelessWidget {
  const InitialScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return const Scaffold(
<<<<<<< HEAD
      body: TextInputBox(),
=======
      body: Center(
        child: PopupMenuExample(
          condicao: 'fase',
          containerWidth: 303,
        ),
      ),
>>>>>>> c454e812567a9c15fa59216bb383a95976dfdd80
    );
  }
}
