# UrDentistApp

Application that can help prevention caries

<u>**By Ravenclaw**</u>

## 📒 Index
- [About](https://github.com/AhmadSultanMA/UrDentist?tab=readme-ov-file#-About)
- [Developmet](https://github.com/AhmadSultanMA/UrDentist?tab=readme-ov-file#-Development)
  - [Tech Stack](https://github.com/AhmadSultanMA/UrDentist?tab=readme-ov-file#-tech-stack)
  - [Our Code Repository](https://github.com/AhmadSultanMA/UrDentist?tab=readme-ov-file#-our-code-repository)
  - [File Structure](https://github.com/AhmadSultanMA/UrDentist?tab=readme-ov-file#-file-structure)
- [Credit](https://github.com/AhmadSultanMA/UrDentist?tab=readme-ov-file#-credit)
- [Screenshot App](https://github.com/AhmadSultanMA/UrDentist?tab=readme-ov-file#-screenshot-app)
  - [Splash Screen](https://github.com/AhmadSultanMA/UrDentist?tab=readme-ov-file#-splash-screen)
  - [Authentication Screen](https://github.com/AhmadSultanMA/UrDentist?tab=readme-ov-file#-authentication-screen)
  - [Homepage Screen](https://github.com/AhmadSultanMA/UrDentist?tab=readme-ov-file#-homepage-screen)

## 🔰 About

Saat ini prevalensi karies gigi di Indonesia sangatlah tinggi, khususnya pada anak-anak usia 5-9 tahun yang memiliki persentase sebesar 90%. Padahal gangguan kesehatan gigi dapat berdampak signifikan terhadap kualitas hidup sang anak, seperti mengalami speech delay, kurangnya kemampuan sosial, tidak bisa hadir sekolah, dan aktivitas lainnya. Gangguan tersebut akan berdampak pada kualitas partisipasi generasi mendatang dalam pertumbuhan ekonomi nasional dari berbagai aspek. Besarnya dampak negatif yang dihasilkan, tidak disertai dengan kesadaran masyarakat akan pentingnya menjaga kesehatan gigi sejak dini. Menyadari permasalahan tersebut, ide kami hadir dengan goals utama untuk meningkatkan kesadaran para orang tua akan pentingnya menjaga kesehatan gigi anak sedini mungkin sebagai upaya preventif terhadap penyakit gigi dan mulut. Terdapat 3 langkah signifikan yang dilakukan oleh aplikasi kami, yaitu : 1. Membangun habit (habit tracker) yang mendukung kesehatan gigi, seperti kebiasaan menyikat gigi secara teratur dan tepat, menjaga konsumsi makanan, dan lain-lain. 2. Mendeteksi penyakit gigi sedini mungkin (screening kondisi gigi) untuk menentukan tindakan yang perlu diambil agar kondisinya tidak parah 3. Memperluas pengetahuan orang tua terkait kesehatan gigi sesuai keperluan anak (edukasi) sehingga dapat meningkatkan awarnesss terhadap penyakit gigi

## 🔧 Development

Here is a description of our apps development

### 📓 Tech Stack

List all the Tech Stack we use to build the system in this this project.

| No  | Tech                  | Details                                                           |
| --- | --------------------- | ----------------------------------------------------------------- |
| 1   | Flutter               | To build a beautiful and usefull FrontEnd App                     |
| 2   | Go                    | To build a fast and efficient Backend App                         |
| 3   | Google Cloud Platform | To provide all application needs related to server infrastructure |

### 🔩 Our Code Repository

- [FrontEnd](https://github.com/AhmadSultanMA/UrDentist)
- [BackEnd](https://github.com/ARKNravi/hackfest-be)

### 📁 File Structure

Here is our File Structure

```

├───lib
│   │   main.dart
│   │
│   ├───data
│   │   ├───model
│   │   │   ├───request
│   │   │   │   ├───forgot_password
│   │   │   │   │       forgot_password_request.dart
│   │   │   │   │       forgot_password_request.g.dart
│   │   │   │   │
│   │   │   │   ├───login
│   │   │   │   │       login_google_request.dart
│   │   │   │   │       login_google_request.g.dart
│   │   │   │   │       login_request.dart
│   │   │   │   │       login_request.g.dart
│   │   │   │   │
│   │   │   │   ├───profile
│   │   │   │   │       create_profile_request.dart
│   │   │   │   │       create_profile_request.g.dart
│   │   │   │   │
│   │   │   │   ├───question
│   │   │   │   │       question_request.dart
│   │   │   │   │       question_request.g.dart
│   │   │   │   │
│   │   │   │   ├───register
│   │   │   │   │       register_request.dart
│   │   │   │   │       register_request.g.dart
│   │   │   │   │
│   │   │   │   ├───reset_password
│   │   │   │   │       reset_password_request.dart
│   │   │   │   │       reset_password_request.g.dart
│   │   │   │   │
│   │   │   │   ├───verify
│   │   │   │   │       resend_verify_request.dart
│   │   │   │   │       resend_verify_request.g.dart
│   │   │   │   │       verify_request.dart
│   │   │   │   │       verify_request.g.dart
│   │   │   │   │
│   │   │   │   └───verify_password
│   │   │   │           verify_password_request.dart
│   │   │   │           verify_password_request.g.dart
│   │   │   │
│   │   │   └───response
│   │   │       ├───baseResponse
│   │   │       │       base_response.dart
│   │   │       │       base_response.g.dart
│   │   │       │
│   │   │       ├───forgot_password
│   │   │       │       forgot_password_response.dart
│   │   │       │       forgot_password_response.g.dart
│   │   │       │
│   │   │       ├───login
│   │   │       │       login_google_response.dart
│   │   │       │       login_google_response.g.dart
│   │   │       │       login_response.dart
│   │   │       │       login_response.g.dart
│   │   │       │
│   │   │       ├───profile
│   │   │       │       profile_response.dart
│   │   │       │       profile_response.g.dart
│   │   │       │
│   │   │       ├───question
│   │   │       │       question_response.dart
│   │   │       │       question_response.g.dart
│   │   │       │
│   │   │       ├───register
│   │   │       │       register_response.dart
│   │   │       │       register_response.g.dart
│   │   │       │
│   │   │       ├───reset_password
│   │   │       │       reset_password_response.dart
│   │   │       │       reset_password_response.g.dart
│   │   │       │
│   │   │       ├───task
│   │   │       │       task_response.dart
│   │   │       │       task_response.g.dart
│   │   │       │
│   │   │       ├───verify
│   │   │       │       resend_verify_response.dart
│   │   │       │       resend_verify_response.g.dart
│   │   │       │       verify_response.dart
│   │   │       │       verify_response.g.dart
│   │   │       │
│   │   │       └───verify_password
│   │   │               verify_password_response.dart
│   │   │               verify_password_response.g.dart
│   │   │
│   │   └───repository
│   │           daily_task.dart
│   │           repository.dart
│   │           retrofit_client.dart
│   │           retrofit_client.g.dart
│   │           user.dart
│   │
│   ├───global_widgets
│   │       navbar.dart
│   │       scaffold_navbar.dart
│   │
│   ├───presentation
│   │   ├───account
│   │   │       account.dart
│   │   │
│   │   ├───authentication
│   │   │   ├───controller
│   │   │   │       forgot_passCode_controller.dart
│   │   │   │       forgot_password_controller.dart
│   │   │   │       login_controller.dart
│   │   │   │       register_code_controller.dart
│   │   │   │       register_controller.dart
│   │   │   │       reset_password_controller.dart
│   │   │   │
│   │   │   └───screen
│   │   │           create_newpass.dart
│   │   │           email_success.dart
│   │   │           forgot_password.dart
│   │   │           forgot_password_code.dart
│   │   │           forgot_success.dart
│   │   │           register.dart
│   │   │           register_code.dart
│   │   │           signin.dart
│   │   │
│   │   ├───chooseProfile
│   │   │   │   profile_controller.dart
│   │   │   │
│   │   │   └───screen
│   │   │           choose_profile.dart
│   │   │           create_profile.dart
│   │   │
│   │   ├───consultation
│   │   │       answer.dart
│   │   │       consultation.dart
│   │   │       create_question.dart
│   │   │       dentist_detail.dart
│   │   │       question_controller.dart
│   │   │
│   │   ├───habit
│   │   │       habit.dart
│   │   │       recapDetail.dart
│   │   │
│   │   ├───homepage
│   │   │       homepage.dart
│   │   │       task_controller.dart
│   │   │
│   │   └───splash
│   │           introduction.dart
│   │           splash_screen.dart
│   │
│   └───route
│           app_router.dart
│           routes.dart

```

| No  | File Name            | Details                                                                                                                  |
| --- | -------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| 1   | hackfest-be          | A Submodule from our Backend Repo you can just klik [here](https://github.com/ARKNravi/hackfest-be) to visit   |
| 2   | UrDentist            | A Submodule from our Frontend Repo you can just klik [here](https://github.com/AhmadSultanMA/UrDentist) to visit |

## 🌟 Credit

The Member of our team

1. Ananda Ravi Kuntadi
2. Ahmad Sultan 
3. Nabila Nafilia 
4. Noory Azyza


## 📷 Screenshot APP

### Splash Screeen
![WhatsApp Image 2024-01-12 at 17 49 09_81b886fe](https://github.com/AhmadSultanMA/dentist-app/assets/90196737/b99bc214-cf33-4e3d-909e-bf9f07602888)
![WhatsApp Image 2024-01-12 at 17 49 09_49d9347f](https://github.com/AhmadSultanMA/dentist-app/assets/90196737/e3e8b613-11d4-463d-bcc0-ec416c72ebdc)
![WhatsApp Image 2024-01-12 at 17 49 10_71f97f04](https://github.com/AhmadSultanMA/dentist-app/assets/90196737/3aa32a89-7eb5-4d94-88f5-786c10787740)

### Authentication Screen
![WhatsApp Image 2024-01-12 at 17 49 10_d5dd3943](https://github.com/AhmadSultanMA/dentist-app/assets/90196737/16eed038-bf05-4b84-b657-291a70a08b1a)
![WhatsApp Image 2024-01-12 at 17 49 11_57407cc1](https://github.com/AhmadSultanMA/dentist-app/assets/90196737/035c24bc-7d9d-4462-ba17-a8873f77e5c8)
![WhatsApp Image 2024-01-12 at 17 49 11_5e7f07aa](https://github.com/AhmadSultanMA/dentist-app/assets/90196737/5995fd67-e432-4a6c-ad9d-54763280b25e)
![WhatsApp Image 2024-01-12 at 17 49 12_fc6c507e](https://github.com/AhmadSultanMA/dentist-app/assets/90196737/8c09865a-1f38-478a-81b3-4e8854671763)
![WhatsApp Image 2024-01-12 at 17 49 12_546f425f](https://github.com/AhmadSultanMA/dentist-app/assets/90196737/c126cbc9-dbe8-462d-8593-ea7d29639985)
![WhatsApp Image 2024-01-12 at 17 49 13_6567d1ff](https://github.com/AhmadSultanMA/dentist-app/assets/90196737/2814ad9a-6fc6-4175-b00b-29ef3213ef97)
![WhatsApp Image 2024-01-12 at 17 49 13_512c98a9](https://github.com/AhmadSultanMA/dentist-app/assets/90196737/d032cf6b-f646-4a41-8589-c9ecf927c337)
![WhatsApp Image 2024-01-12 at 17 49 13_43160939](https://github.com/AhmadSultanMA/dentist-app/assets/90196737/da4f7b63-2fc2-4a99-b2ed-8bc2149c69f4)
![WhatsApp Image 2024-01-12 at 17 49 14_c68afa37](https://github.com/AhmadSultanMA/dentist-app/assets/90196737/80e12438-0f6d-4086-8e82-998ce13ee7e9)
![WhatsApp Image 2024-01-12 at 17 49 14_36eecd19](https://github.com/AhmadSultanMA/dentist-app/assets/90196737/d32f95f2-8b92-45b0-b1c7-c2ee1cd7d024)

### Homepage Screen
![WhatsApp Image 2024-01-12 at 17 49 14_da8362d7](https://github.com/AhmadSultanMA/dentist-app/assets/90196737/817a128c-1155-4ae7-a273-a7f1a5bc278f)
![WhatsApp Image 2024-01-12 at 17 49 15_565e0639](https://github.com/AhmadSultanMA/dentist-app/assets/90196737/cb27c134-b7b5-4811-88b0-138c196c7af5)
![WhatsApp Image 2024-01-12 at 17 49 15_95074863](https://github.com/AhmadSultanMA/dentist-app/assets/90196737/143ef247-4124-456f-a184-673912b6b4c2)
![WhatsApp Image 2024-01-12 at 17 49 15_f9a80ca9](https://github.com/AhmadSultanMA/dentist-app/assets/90196737/bf59dbe5-6845-4b04-acc2-0f8dbdf17736)
![WhatsApp Image 2024-01-12 at 17 49 15_f9a80ca9](https://github.com/AhmadSultanMA/dentist-app/assets/90196737/9422739a-39c7-462f-ab3e-6654d431d0ad)
![WhatsApp Image 2024-01-18 at 19 20 05_7ce2316d](https://github.com/AhmadSultanMA/UrDentist/assets/60171098/ab81e96b-9593-4695-bd93-6a162c05ad8d)
![WhatsApp Image 2024-01-18 at 19 20 05_60156661](https://github.com/AhmadSultanMA/UrDentist/assets/60171098/c6f5c261-85fb-46e4-b8c4-eae30c350283)
![WhatsApp Image 2024-01-18 at 19 20 06_21b977e9](https://github.com/AhmadSultanMA/UrDentist/assets/60171098/20dae082-746a-4d35-997b-6b16a83de624)
![WhatsApp Image 2024-01-18 at 19 20 06_3225201b](https://github.com/AhmadSultanMA/UrDentist/assets/60171098/6b69d25f-37a0-4dd1-b2db-9ff53356772b)
![WhatsApp Image 2024-01-18 at 19 20 06_595ea71c](https://github.com/AhmadSultanMA/UrDentist/assets/60171098/cdbe4d21-f168-4b9b-b0c1-93e75eb305ef)

## 🔒License

© Ravenclaw - Hackfest by Google Indonesia 2024
