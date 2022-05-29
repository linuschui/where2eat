import React from 'react';
import '../App.css';
import { Button } from './Button';
import './SignUpSection.css';
// import { createClient } from '@supabase/supabase-js';
// import { useState, useEffect } from "react";

// const supabaseUrl = process.env.REACT_APP_SUPABASE_URL
// const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY

// const supabase = createClient(supabaseUrl, supabaseAnonKey)

function SignUpSection() {

    return (
      <div className='signup-container'>
        <section className='signup-subscription'>
          <p className='signup-subscription-heading'>
            Sign up now to find where 2 eat next!
          </p>
          <p className='signup-subscription-text'>
            placeholder
          </p>
          <div className='input-areas'>
            <form>  
              <input
                className='signup-input'
                name='name'
                type='name'
                placeholder='Full Name'
              />
              </form>
          </div>
          <div className='input-areas'>
            <form>
              <input
                className='signup-input'
                name='email'
                type='email'
                placeholder='Email'
              />
              </form>
          </div>
          <div className='input-areas'>
            <form>
              <input
                className='signup-input'
                name='username'
                type='username'
                placeholder='Username'
              />
              </form>
          </div>
          <div className='input-areas'>
            <form>
              <input
                className='signup-input'
                name='password'
                type='password'
                placeholder='Password'
              />
            </form>
          </div>
          <Button buttonStyle='btn--outline'>SIGN UP</Button>
        </section>
      </div>  
    );
}

export default SignUpSection