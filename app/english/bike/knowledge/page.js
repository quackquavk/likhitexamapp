'use client'
import React, { useState } from 'react';
import {carKnowledgeQuestions} from '@/constants';
import QuizApp from '@/utils';

const page = () => {
      return <QuizApp questions={carKnowledgeQuestions} />;
}

export default page



