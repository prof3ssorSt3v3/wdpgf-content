(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{507:function(e,t,a){e.exports=a.p+"assets/img/widget-inspector.910165a8.png"},508:function(e,t,a){e.exports=a.p+"assets/img/studio-launch.7828e7b9.png"},553:function(e,t,a){"use strict";a.r(t);var n=a(43),o=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("PageHeader"),e._v(" "),n("h2",{attrs:{id:"flutter"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#flutter"}},[e._v("#")]),e._v(" Flutter")]),e._v(" "),n("p",[e._v("Flutter is an open source framework by Google for building, natively compiled, multi-platform applications from a single codebase written with Dart.")]),e._v(" "),n("p",[e._v("Flutter apps can be developed in either VS Code or Android Studio.")]),e._v(" "),n("p",[e._v("They can be developed on either Windows or MacOS. However, iOS apps can only be compiled and tested on MacOS.")]),e._v(" "),n("div",{staticClass:"custom-block danger"},[n("p",{staticClass:"custom-block-title"},[e._v("DANGER")]),e._v(" "),n("p",[e._v("Mac OSX REQUIRED for iOS. So, we will be running everything for the second half of the course through MacOS.")])]),e._v(" "),n("p",[e._v("Here is the reference for "),n("a",{attrs:{href:"https://docs.flutter.dev/get-started/install/macos",target:"_blank",rel:"noopener noreferrer"}},[e._v("installing Flutter on MacOSX"),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("We need to first download and install the Flutter SDK.\n"),n("a",{attrs:{href:"https://storage.googleapis.com/flutter_infra_release/releases/stable/macos/flutter_macos_3.13.9-stable.zip",target:"_blank",rel:"noopener noreferrer"}},[e._v("Here is the download link for the version 3.13.9 zip"),n("OutboundLink")],1),e._v(". The Flutter SDK will include\neverything you need to run applications built with the Dart language. At the time of writing the current version (in the link) is for version 3.13.9 of Flutter.")]),e._v(" "),n("p",[e._v("When you are finished downloading the SDK, you will want to extract it to a known location. You will need to update your Environment variable "),n("code",[e._v("PATH")]),e._v(" to point to the "),n("code",[e._v("bin")]),e._v(" folder inside this location.\nI would recommend creating a folder called "),n("code",[e._v("flutter")]),e._v(" inside your user folder. That would make the location that we need to add to the "),n("code",[e._v("PATH")]),e._v(" - "),n("code",[e._v("~/flutter/bin/")]),e._v(". You will update the "),n("code",[e._v("PATH")]),e._v(" inside your\n"),n("code",[e._v("~/.zshrc")]),e._v(" file.")]),e._v(" "),n("p",[e._v("After you have moved the extracted Flutter SDK to that location, updated your "),n("code",[e._v("PATH")]),e._v(", and restarted your Terminal, then you need to run the command line tool "),n("code",[e._v("flutter doctor")]),e._v(" in a Terminal.")]),e._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[e._v("flutter doctor\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("p",[e._v("The "),n("code",[e._v("flutter doctor")]),e._v(" will check for any missing dependencies on your Mac. You can run this command as many times as you want.")]),e._v(" "),n("p",[e._v("If you want to check and see where you have Flutter and Dart installed, run this command:")]),e._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[e._v("which")]),e._v(" flutter dart\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("h2",{attrs:{id:"flutter-in-vs-code"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#flutter-in-vs-code"}},[e._v("#")]),e._v(" Flutter in VS Code")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://docs.flutter.dev/development/tools/vs-code",target:"_blank",rel:"noopener noreferrer"}},[e._v("Reference for setting up VSCode for Flutter"),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("Build Flutter apps in VS Code is a simple matter of installing and updating the "),n("code",[e._v("Flutter")]),e._v(" extension by "),n("code",[e._v("Dart Code")]),e._v(", through the Extensions panel in VS Code. At the time of writing, this extension was\non version 3.74.0.")]),e._v(" "),n("p",[e._v("When you want to start a new Flutter project in VS Code open a new "),n("strong",[e._v("empty")]),e._v(" project folder, type "),n("code",[e._v("⌘ CMD + ⇧ SHIFT + P")]),e._v(' to open the command pallette and type "flutter". You will see a list of three\npossible commands - '),n("code",[e._v("New Project")]),e._v(", "),n("code",[e._v("Run Doctor")]),e._v(", and "),n("code",[e._v("Upgrade")]),e._v(". Select the "),n("code",[e._v("New Project")]),e._v(" item with your arrow keys and hit enter.")]),e._v(" "),n("p",[e._v("Next you will be given options about what to create. Select "),n("code",[e._v("Flutter Application")]),e._v(". You will then be prompted for a name and location for the project. Select your empty project folder and wait for\neverything to be set up for you. When it is ready you will see the "),n("code",[e._v("main.dart")]),e._v(" file open in VS Code, ready for you to edit and run.")]),e._v(" "),n("p",[e._v("You will also see a bunch of notes appear in the "),n("code",[e._v("Output")]),e._v(" panel in the Terminal area. The most important part being the "),n("code",[e._v("flutter run")]),e._v(" command that you will need to start your app.")]),e._v(" "),n("h3",{attrs:{id:"start-a-flutter-project-in-vs-code"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#start-a-flutter-project-in-vs-code"}},[e._v("#")]),e._v(" Start a Flutter Project in VS Code")]),e._v(" "),n("p",[e._v("In VS Code, open a new empty folder called "),n("code",[e._v("my_app")]),e._v(". Next, open the Terminal window in VS Code. It should already be pointing to the current empty folder. Then we will run the flutter tool from the\ncommand line to create our new project.")]),e._v(" "),n("blockquote",[n("p",[e._v("This command "),n("em",[e._v("could")]),e._v(" be used to create our new project.")])]),e._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[e._v("flutter create my_app\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("p",[e._v("Flutter project names must be lowercase and and NO spaces. This "),n("em",[e._v("would")]),e._v(" create a folder called "),n("code",[e._v("my_app")]),e._v(" and build your starter project inside that folder. So, this means that we would have a folder\ncalled "),n("code",[e._v("my_app")]),e._v(" inside of a folder called "),n("code",[e._v("my_app")]),e._v(". Really redundant.")]),e._v(" "),n("p",[e._v("Instead, just add a period instead of the project name. This will create the project inside the current folder and name it after the current folder name.")]),e._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[e._v("flutter create "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v("\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("h2",{attrs:{id:"flutter-in-android-studio"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#flutter-in-android-studio"}},[e._v("#")]),e._v(" Flutter in Android Studio")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://docs.flutter.dev/development/tools/android-studio",target:"_blank",rel:"noopener noreferrer"}},[e._v("Reference for setting up Android Studio for Flutter"),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("With Android Studio installed (on MacOS) you should be running an updated version. Start Android Studio and, on the Welcome screen, look for the cog icon. Click the cog and check for updates. This\nwill require a restart of Android Studio to install any update.")]),e._v(" "),n("blockquote",[n("p",[e._v("We are using the "),n("strong",[e._v("Flamingo")]),e._v(" or "),n("strong",[e._v("Giraffe")]),e._v(" version of Android Studio.")])]),e._v(" "),n("p",[e._v("Then we need to add the "),n("code",[e._v("Flutter")]),e._v(" and "),n("code",[e._v("Dart")]),e._v(" plugins for Android Studio. On the welcome screen, Select "),n("code",[e._v("Plugins")]),e._v(" in the left hand menu. Under the "),n("code",[e._v("Marketplace")]),e._v(" tab search for "),n("code",[e._v("Flutter")]),e._v(" and "),n("code",[e._v("Dart")]),e._v(" and\nclick the "),n("code",[e._v("Install")]),e._v(" button for each. This will require a restart of Android Studio.")]),e._v(" "),n("p",[e._v("You will also need to set up at least one AVD to run your emulator and test your Flutter apps. Do this through the "),n("code",[e._v("AVD Manager")]),e._v(" in Android Studio. You should have Android 11, 12, and 13 (APIs 30,\n31, 33) installed through the "),n("code",[e._v("SDK Manager")]),e._v(". API 34 can also be installed.")]),e._v(" "),n("h3",{attrs:{id:"start-a-flutter-project-in-android-studio"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#start-a-flutter-project-in-android-studio"}},[e._v("#")]),e._v(" Start a Flutter Project in Android Studio")]),e._v(" "),n("p",[e._v("From the welcome screen, just click the button that says "),n("code",[e._v("New Flutter Project")]),e._v(" then follow the steps in the wizard.")]),e._v(" "),n("p",[e._v("If you have another project open in Android Studio, go to the "),n("code",[e._v("File")]),e._v(" menu and mouse over "),n("code",[e._v("New")]),e._v(" and select the "),n("code",[e._v("New Flutter Project")]),e._v(" option in the list, and follow the steps in the wizard.")]),e._v(" "),n("h2",{attrs:{id:"project-configuration"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#project-configuration"}},[e._v("#")]),e._v(" Project Configuration")]),e._v(" "),n("p",[e._v("Once you have a project created in either VS Code or Android Studio, look for the "),n("code",[e._v("pubspec.yaml")]),e._v(" file. This file contains the settings for your project.")]),e._v(" "),n("p",[e._v("If you are not sure about how "),n("code",[e._v("YAML")]),e._v(" works, look back on the notes and video in "),n("RouterLink",{attrs:{to:"/modules/week1/file-formats/"}},[e._v("class 1.1")])],1),e._v(" "),n("h4",{attrs:{id:"app-name"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#app-name"}},[e._v("#")]),e._v(" App Name")]),e._v(" "),n("p",[e._v("In each Flutter project there is a "),n("code",[e._v("pubspec.yaml")]),e._v(" file at the project root. This file holds all the settings about your project, similar to how a "),n("code",[e._v("manifest.json")]),e._v(" file does for a PWA.")]),e._v(" "),n("p",[e._v("The name of your App will be set with the "),n("code",[e._v("name")]),e._v(" property in the "),n("code",[e._v("pubspec.yaml")]),e._v(" file.")]),e._v(" "),n("p",[e._v("Here is a small simple version of what the pubspec file contains:")]),e._v(" "),n("div",{staticClass:"language-yaml line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-yaml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" app_4\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("description")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" A new Flutter project.\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("publish_to")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v("'none'")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("version")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" 1.0.0+1\n\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("environment")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("sdk")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v("'>=2.7.0 <3.13.8'")]),e._v("\n\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("dependencies")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("flutter")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("sdk")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" flutter\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("cupertino_icons")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" ^1.0.0\n\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("dev_dependencies")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("flutter_test")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("sdk")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" flutter\n\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("flutter")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("uses-material-design")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token boolean important"}},[e._v("true")]),e._v("\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br"),n("span",{staticClass:"line-number"},[e._v("13")]),n("br"),n("span",{staticClass:"line-number"},[e._v("14")]),n("br"),n("span",{staticClass:"line-number"},[e._v("15")]),n("br"),n("span",{staticClass:"line-number"},[e._v("16")]),n("br"),n("span",{staticClass:"line-number"},[e._v("17")]),n("br"),n("span",{staticClass:"line-number"},[e._v("18")]),n("br"),n("span",{staticClass:"line-number"},[e._v("19")]),n("br")])]),n("p",[e._v("Remember that the tab spaces have meaning in YAML files.")]),e._v(" "),n("h2",{attrs:{id:"running-an-app"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#running-an-app"}},[e._v("#")]),e._v(" Running an App")]),e._v(" "),n("p",[e._v("To launch an app from VS Code:")]),e._v(" "),n("p",[e._v("We need to first open the "),n("code",[e._v("main.dart")]),e._v(" file that is inside the "),n("code",[e._v("/lib")]),e._v(" folder. Once this file is open VS Code will show a Run and Debug button above the editor area. You can also open the "),n("code",[e._v("Run")]),e._v(" menu at\nthe top and click on the "),n("code",[e._v("Start Debugging")]),e._v(" item or just hit "),n("code",[e._v("F5")]),e._v(".")]),e._v(" "),n("p",[e._v("Once you click the key, button, or menu item, then you will be prompted with a list of places to run your app. This list will include the iOS Simulator and any AVD that you have created through\nAndroid Studio.")]),e._v(" "),n("p",[e._v("After the initial launch of the app, you will see a new control panel at the top of VS Code that lets you stop or restart your app.")]),e._v(" "),n("p",[e._v("After launching your first app you will be prompted to launch additional dev tools. The tools include a Widget Inspector that can be turned on by the blue magnifying glass in that new control panel at\nthe top.")]),e._v(" "),n("p",[n("img",{attrs:{src:a(507),alt:"widget inspector"}})]),e._v(" "),n("p",[e._v("In the status bar at the bottom of your VS Code window you will see a clickable area that says "),n("code",[e._v("Dart Dev Tools")]),e._v(". Click on that to open the list of different Dev Tools to launch. The lightning bolt\nbutton is to reload the app after making changes.")]),e._v(" "),n("p",[e._v("To launch a flutter app from Android Studio:")]),e._v(" "),n("p",[e._v("Open your project that you previously created and look in the tool bar at the top. It will have a run button as well as a list of possible connected devices, AVDs, and iOS Simulators. The iOS\nsimulator must be running to appear in the list. See the image below.")]),e._v(" "),n("p",[n("img",{attrs:{src:a(508),alt:"studio launch buttons"}})]),e._v(" "),n("p",[e._v("The lightning bolt icon button is to reload the app after making changes.")]),e._v(" "),n("p",[e._v("Alternatively you can go to the Run menu and select the Debug option to run your app with whichever device was selected in the list of possible connected devices.")]),e._v(" "),n("h4",{attrs:{id:"launching-a-flutter-app-to-an-ios-device"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#launching-a-flutter-app-to-an-ios-device"}},[e._v("#")]),e._v(" Launching a Flutter App to an iOS Device")]),e._v(" "),n("p",[e._v("Android devices will appear in the list inside Android Studio and VS Code.")]),e._v(" "),n("p",[e._v("Before you can launch on a physical iOS device you need to set up a few things in XCode. "),n("a",{attrs:{href:"https://docs.flutter.dev/get-started/install/macos#deploy-to-ios-devices",target:"_blank",rel:"noopener noreferrer"}},[e._v("Here are the setup instructions"),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("You will also need to join our Apple Developer Account and register your device with our account. If you have a physical iOS device that you want to use for Flutter, you need to send your "),n("strong",[e._v("UDID")]),e._v("\nfrom your device to Steve.")]),e._v(" "),n("p",[e._v("The simplest way to get an iOS "),n("strong",[e._v("UDID")]),e._v(" is to connect the phone to your MacBook with a USB cable, then click on the Apple Icon in the top right corner of the screen, and then select "),n("code",[e._v("About This Mac")]),e._v(".\nIn the window that appears, click on the "),n("code",[e._v("System Report")]),e._v(" button. When the system report window appears, select "),n("code",[e._v("USB")]),e._v(" in the left hand list. Then look for your iPhone in the top half of the right hand\npanels. Click on your device in that top list and then you will see your "),n("strong",[e._v("UDID")]),e._v(" in the bottom window. Copy and paste the "),n("strong",[e._v("UDID")]),e._v(" into an email for Steve.")]),e._v(" "),n("h4",{attrs:{id:"assets"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#assets"}},[e._v("#")]),e._v(" Assets")]),e._v(" "),n("p",[e._v("To add assets, like fonts and images, to your project create a folder at the root level called "),n("code",[e._v("assets")]),e._v(".")]),e._v(" "),n("p",[e._v("You can create sub-folders for each type of file inside the "),n("code",[e._v("assets")]),e._v(" folder.")]),e._v(" "),n("p",[e._v("Drag whatever files you want inside the "),n("code",[e._v("assets")]),e._v(" folder and its sub-folders. Then you need to update your "),n("code",[e._v("pubspec.yaml")]),e._v(" file to make it include the files in the project.")]),e._v(" "),n("p",[e._v("Create a new section in the "),n("code",[e._v("pubspec.yaml")]),e._v(" file with the heading "),n("code",[e._v("assets")]),e._v(" inside (indented below) the "),n("code",[e._v("flutter")]),e._v(" section heading. In the example below, the two images "),n("code",[e._v("hello.jpg")]),e._v(" and "),n("code",[e._v("goodbye.jpg")]),e._v(" are\nloaded from the "),n("code",[e._v("/assets/images/")]),e._v(" folder. The last line "),n("code",[e._v("- assets/subdirectory/")]),e._v(" will load ALL files that are inside the "),n("code",[e._v("/assets/subdirectory/")]),e._v(" folder as available assets for your project.")]),e._v(" "),n("div",{staticClass:"language-yaml line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-yaml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# this is the assets section of the file")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# this is a comment in a yaml file")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("flutter")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("assets")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" assets/images/hello.jpg\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" assets/images/goodbye.jpg\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" assets/subdirectory/\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br")])]),n("blockquote",[n("p",[e._v("Feel free to delete any of the extra comments that come in the starter "),n("code",[e._v("pubspec.yaml")]),e._v(" file.")])]),e._v(" "),n("h2",{attrs:{id:"flutter-commands"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#flutter-commands"}},[e._v("#")]),e._v(" Flutter Commands")]),e._v(" "),n("p",[e._v("There are LOTS of CLI commands for the "),n("code",[e._v("flutter")]),e._v(" program.")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://docs.flutter.dev/reference/flutter-cli",target:"_blank",rel:"noopener noreferrer"}},[e._v("Here is the full list of commands"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("h2",{attrs:{id:"what-to-do-this-week"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#what-to-do-this-week"}},[e._v("#")]),e._v(" What to do this week")]),e._v(" "),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[e._v("TODO Things to do before next week")]),e._v(" "),n("ul",[n("li",[e._v("Read and Watch all the course content for "),n("code",[e._v("9.1")]),e._v(", "),n("code",[e._v("9.2")]),e._v(", and "),n("code",[e._v("10.2")])]),e._v(" "),n("li",[e._v("Finish working on the "),n("RouterLink",{attrs:{to:"/assignments/hybrid/"}},[e._v("step 4 of your Hybrid project")])],1)])])],1)}),[],!1,null,null,null);t.default=o.exports}}]);