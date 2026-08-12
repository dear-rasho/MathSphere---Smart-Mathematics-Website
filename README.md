# MathSphere — Updated Offline Mathematics Platform

This build keeps the existing MathSphere structure and offline data, with the following workflow improvements:

- Calculator is hidden on Home and opens from Calculator navigation; it has Basic, Scientific and Advanced modes plus local history.
- Syllabus is hidden on Home and opens from Learn/Syllabus navigation. Each topic opens an expanded offline study note with curriculum summary, key points, study method and local practice examples.
- AI Paper Generator uses board/class/year and generates the full paper pattern instead of only MCQs. The generated paper moves through MCQs → Short Questions → Long Questions → Solution.
- AI-generated papers have a Solution of this Paper action and an HTML download option.
- FBISE local paper data remains available with Section A/B/C structure. Available local papers can be sent to AI for complete solutions and downloaded.
- CBSE offline papers remain clearly labelled app-authored/not official and follow the current board-style section structure used by the app.
- Full Book Practice uses the complete local question bank. It is not limited to 100 questions.
- MCQ answers use a fixed option-column layout so long questions do not move the radio circles.
- MCQ results hide the submitted test and show the result directly below.
- Written tests can be evaluated by Gemini when an API key is configured. The result exposes weak concepts and an AI lesson button.
- AI weak-concept lessons are generated from mistakes and use MathJax for mathematics.
- MathJax is bundled locally under vendor/mathjax for offline equation rendering.

## API key

Edit `js/config.js` and add your Gemini API key. For a public Play Store application, do not ship a private Gemini key in the client; use a secure backend/proxy.

## Official curriculum sources represented in the local curriculum data

FBISE:
- https://www.fbise.edu.pk/syllabusSSC-I.php
- https://www.fbise.edu.pk/syllabusSSC-II.php
- https://www.fbise.edu.pk/syllabusHSSC-I.php
- https://www.fbise.edu.pk/syllabusHSSC-II.php

CBSE:
- https://cbseacademic.nic.in/curriculum_2026.html

Generated/app-authored papers are never labelled as official board papers.
