# -*- coding: utf-8 -*-
"""
Created on Sun Mar  6 21:02:32 2022

@author: Peyman
"""

# Importing the libraries
import gym
import collections

# Givving the constants
while True:
    env_id = int(input("Enter the env id (1: FrozenLake-v1 , 2: FrozenLake8x8-v1) : \n"))
    if env_id == 1:
        env_name = 'FrozenLake-v1'
        break
    elif env_id == 2:
        env_name = 'FrozenLake8x8-v1'
        break
    else:
        print("\nEnter again...")

yes_no = input("\nDo you want to change the `gamma` parameter?[y/n] \n(gamma = 0.9 in default)\n")
if yes_no == 'y' or yes_no == 'Y':
    gamma = float(input("Enter the gamma:\n"))
    print(f'gamma is set to {gamma}')
elif yes_no == 'n' or yes_no == 'N':
    gamma  = 0.9

print('\nCreating the Agent class...')
# Creating the agent
class Agent():
    
    # initializing
    def __init__(self):
        self.env = gym.make(env_name)
        self.state = self.env.reset()
        self.rewards = collections.defaultdict(float)
        self.transits = collections.defaultdict(collections.Counter)
        self.values = collections.defaultdict(float)
    
    # Function to play n random games and update reward and transition tables
    def n_random_games(self, random_times):
        state = self.env.reset()
        env = self.env
        for i in range(random_times):
            action = env.action_space.sample()
            new_state, reward, is_done, _ = env.step(action)
            self.rewards[(state, action, new_state)] = reward
            self.transits[(state, action)][new_state] += 1
            # Check if an episode is done
            if is_done:
                new_state = env.reset()
                self.values_updator()
            if i%int(random_times/5) == 0:
                print(f'{int(i/random_times*100)}% completed')
            elif i == random_times - 1:
                print('100% completed.')
            state = new_state
        
    # Select the best action in any state
    def best_action(self, state):
        best_action, action_value = None, None
        for action in range(self.env.action_space.n):
            value = self.values[(state, action)]
            if action_value is None or value > action_value:
                action_value = value
                best_action = action
        return best_action
    
    # Calculate the action value
    def values_updator(self):
        for state in range(self.env.observation_space.n):
            for action in range(self.env.action_space.n):
                the_counter = self.transits[(state, action)]
                total = sum(the_counter.values())
                action_value = 0.0
                for new_state, new_state_count in the_counter.items():
                    prob = new_state_count / total
                    reward = self.rewards[(state, action, new_state)]
                    best_action = self.best_action(new_state)
                    next_rewards = self.values[(new_state, best_action)]
                    action_value += prob * (reward + gamma * next_rewards)
                self.values[(state, action)] = action_value
                
    # Play n episodes            
    def play_n_episode(self, num_episodes):
        state = self.env.reset()
        env = self.env
        n_episodes = 0.0
        rewards = 0.0
        while True:
            action = self.best_action(state)
            new_state, reward, is_done, _ = env.step(action)
            self.rewards[(state, action)] = reward
            self.transits[(state, action)][new_state] += 1
            rewards += reward
            if is_done:
                state = env.reset()
                n_episodes += 1
                self.values_updator()
                if n_episodes == num_episodes:
               
                    break
            state = new_state
        return rewards/num_episodes
        
            
    # Calculating the performance of the agent
    def performance(self, num_episodes):
        state = self.env.reset()
        env = self.env
        n_episodes = 0.0
        rewards = 0.0
        while True:
            action = self.best_action(state)
            new_state, reward, is_done, _ = env.step(action)
            rewards += reward
            self.rewards[(state, action)] = reward
            self.transits[(state, action)][new_state] += 1
            if is_done:
                state = env.reset()
                n_episodes += 1
                self.values_updator()
                if n_episodes == num_episodes:
                   
                    break
            state = new_state
        return rewards/num_episodes

print('Agent class have been created...')

if __name__ == "__main__":
    agent = Agent()
    state = agent.env.reset()
    env = agent.env
    rewards = 0.0
    iter_num = 0
    episode_num = 0
    random_games = int(input('How many random games should be played?\n'))
    agent.n_random_games(random_games)
    best_performance = float(input('What is the the best performance you want in 20 episodes?\n(it should be between 0 and 1\n'))
    max_iter = int(input('Enter the max iterations: '))
    best_reward = 0.0
    
    while True:
        reward = agent.play_n_episode(20)
        if reward > best_reward:
            print('Best reward updated from %.3f -> %.3f'%(best_reward, reward))
            best_reward = reward
        if best_reward > best_performance:
            print('Best reward is better than %.3f in 20 games'%best_performance)
            break
        
        
        
    
    
    






























