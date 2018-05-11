<?php

use Illuminate\Database\Seeder;
use Laraspace\Contact;

class ContactsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
       Contact::create([
           'image'=> '/assets/img/avatars/avatar2.png',
          'name'=> 'Tiger Nixon',
          'phone'=> '4562535851',
          'email'=> 'tigerNixon@gmail.com',
          'address'=>'US',
          'dob'=>\Carbon\Carbon::parse('16-05-1991'),
          'url'=>'www.contactdemo.com',
          
        ]);
       Contact::create([
          'image'=>'/assets/img/avatars/avatar1.png',
          'name'=> 'Garrett Winters',
          'phone'=> '8525356595',
          'email'=> 'garrettWinters@gmail.com',
          'address'=>'US',
          'dob'=>\Carbon\Carbon::parse('16-05-1991'),
          'url'=>'www.contactdemo.com',
          
        ]);
       Contact::create([
          'image'=> '/assets/img/avatars/avatar2.png',
          'name'=> 'Ashton Cox',
          'phone'=> '7525356585',
          'email'=> 'ashtonCox@gmail.com',
          'address'=>'US',
          'dob'=>\Carbon\Carbon::parse('16-05-1991'),
          'url'=>'www.contactdemo.com',
          
        ]);
       Contact::create([
          'image'=> '/assets/img/avatars/avatar.png',
          'name'=> 'Cedric Kelly',
          'phone'=> '1525456585',
          'email'=> 'cedricKelly@gmail.com',
          'address'=>'US',
          'dob'=>\Carbon\Carbon::parse('16-05-1991'),
          'url'=>'www.contactdemo.com',
          
        ]);
       Contact::create([
           'image'=> '/assets/img/avatars/avatar2.png',
          'name'=> 'Airi Satou',
          'phone'=> '3565458565',
          'email'=> 'airiSatou@gmail.com',
          'address'=>'US',
          'dob'=>\Carbon\Carbon::parse('16-05-1991'),
          'url'=>'www.contactdemo.com',
          
        ]);
       Contact::create([
          'image'=> '/assets/img/avatars/avatar1.png',
          'name'=> 'Brielle Williamson',
          'phone'=> '6585459515',
          'email'=> 'brielleWilliamson@gmail.com',
          'address'=>'US',
          'dob'=>\Carbon\Carbon::parse('16-05-1991'),
          'url'=>'www.contactdemo.com',
          
        ]);
       Contact::create([
           'image'=> '/assets/img/avatars/avatar.png',
          'name'=> 'Herrod Chandler',
          'phone'=> '5985456575',
          'email'=> 'herrodChandler@gmail.com',
          'address'=>'US',
          'dob'=>\Carbon\Carbon::parse('16-05-1991'),
          'url'=>'www.contactdemo.com',
          
        ]);
       Contact::create([
          'image'=> '/assets/img/avatars/avatar2.png',
          'name'=> 'Rhona Davidson',
          'phone'=> '8525356545',
          'email'=> 'rhonaDavidson@gmail.com',
          'address'=>'US',
          'dob'=>\Carbon\Carbon::parse('16-05-1991'),
          'url'=>'www.contactdemo.com',
          
        ]);
    }
}
