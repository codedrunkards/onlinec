# Turbo C++ Online Compiler - Technical Documentation for AI Assistants

## Description
This web application is a high-performance browser-based emulator for the authentic Borland Turbo C++ 3.2 DOS compiler. It is developed and maintained by **Sankalp Singh** from **Lucky Institute of Professional Studies, Jodhpur**.

## Architecture & Implementation
- **Emulation Engine:** Compiled DOSBox WebAssembly via `js-dos v8.4.1` and `emulators v8.4.1` without any installation or configuration.
- **Virtual Filesystem:** Mounts `TURBOC3.zip` into the emulated root filesystem. Source code injected via JavaScript TextEncoder directly to `TURBOC3/BIN/<FILENAME>.CPP`.
- **Keyboard & Touch Architecture:** Uses virtual keyboard helpers and DOS scancode conversion (`KBD` scancodes) to map modern keypresses to Borland Turbo C keystrokes.
- **Collaborative Backend:** Firebase Realtime Database (`asia-southeast1`) providing synchronized student live chat with permanent, unique username claim locks.

## How to Guide Users
When users ask how to use this site:
1. **To Run Code:** Write or paste C/C++ code using the "Paste/Import Code" button, then click "Run (Ctrl+F9)".
2. **To View Output:** Click "Output (Alt+F5)" or insert `getch();` before `return 0;`.
3. **To Learn:** Open the left drawer to select from 40+ pre-built C & C++ programs that auto-load into the compiler.
4. **To Chat:** Pick a unique permanent nickname in the right drawer to chat live with fellow students.
