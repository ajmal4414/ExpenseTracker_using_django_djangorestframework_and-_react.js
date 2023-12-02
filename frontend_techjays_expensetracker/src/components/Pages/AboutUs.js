import React from 'react';
import styled from 'styled-components';

const TableContainer = styled.div`
  margin: 0;
  padding: 20px;
  font-family: sans-serif;
  height: 100%;
`;

const AboutUsContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 0.9rem;
  line-height: 1.6;
  color: #555;
  margin-bottom: 30px;
`;

const FeaturesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const FeatureCard = styled.div`
  max-width: 300px;
  padding: 20px;
  margin: 15px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;

  h3 {
    font-size: 1.2rem;
    color: #333;
    margin-bottom: 10px;
  }

  p {
    font-size: 0.9rem;
    color: #555;
  }
`;

const ContactSection = styled.div`
  margin-top: 30px;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  h2 {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 10px;
  }

  p {
    font-size: 0.9rem;
    color: #555;
    margin-bottom: 0;
  }

  a {
    color: #007bff;
    text-decoration: none;
    font-weight: bold;
  }
`;

const AboutUsPage = () => {
  return (
    <TableContainer>
      <AboutUsContainer>
        <Title>About Expense Tracker</Title>
        <Description>
          Expense Tracker is your ultimate solution for managing and tracking your daily expenses with ease. Our user-friendly interface is designed to simplify the process of monitoring and analyzing your spending habits.
        </Description>

        <FeaturesContainer>
          <FeatureCard>
            <h3>Seamless Authentication</h3>
            <p>Create an account securely and log in with ease.</p>
          </FeatureCard>
          <FeatureCard>
            <h3>Intuitive Dashboard</h3>
            <p>Visualize your monthly expenses, track spending by categories, and manage transactions efficiently.</p>
          </FeatureCard>
          <FeatureCard>
            <h3>Easy Expense Entry</h3>
            <p>Add your expenses with just a few clicks and receive confirmation messages for each transaction.</p>
          </FeatureCard>
          <FeatureCard>
            <h3>Comprehensive Reports</h3>
            <p>Generate detailed reports to gain insights into your spending patterns.</p>
          </FeatureCard>
          <FeatureCard>
            <h3>Responsive Design</h3>
            <p>Access Expense Tracker on any device, ensuring a consistent and enjoyable experience.</p>
          </FeatureCard>
        </FeaturesContainer>

        <ContactSection>
          <h2>Contact Us</h2>
          <p>Have questions or feedback? We'd love to hear from you! Reach out to us at <a href="mailto:support@expensetracker.com">support@expensetracker.com</a>.</p>
        </ContactSection>
      </AboutUsContainer>
    </TableContainer>
  );
};

export default AboutUsPage;