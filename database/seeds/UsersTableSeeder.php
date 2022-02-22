<?php
use Illuminate\Database\Seeder;
use App\User;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        
         User::create([
            'email' => 'nivetha@cgbod.in',
            'name' => 'Nivetha',
            'role' => 'user',
            'password' => bcrypt('nive@123')
        ]);
    }
}
