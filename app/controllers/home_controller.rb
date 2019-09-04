class HomeController < ApplicationController
  def index
    @projects = [
      {
        id: 1,
        name: 'LSTM Stock Predictor',
        author: 'Eric Robertson',
        link: 'https://github.com/opensourceryclub/LSTM-Stock-Predictor',
        description: 'Uses machine learning via tensorflow to predict stock prices.'
      },
      {
        id: 2,
        name: 'SwarmAI',
        author: 'Emery Bacon',
        link: 'https://github.com/opensourceryclub/SwarmAI',
        description: 'Particle swarm optimization visualization in Processing.',
      },
      {
        id: 3,
        name: 'BugSleuth',
        author: 'Donald Isaac',
        link: 'https://github.com/DonIsaac/BugSleuth',
        description: 'User feedback and QA issue tracking tool for any website.',
      },
      {
        id: 4,
        name: 'Raytrace Renderer',
        author: 'Donald Isaac',
        link: 'https://github.com/DonIsaac/Raytrace-Renderer',
        description: 'A rendering engine using raytracing and phong shading in Java.',
      }
    ]
  end

  def get_involved
  end

  def projects
    render 'shared/construction'
  end

  def sponsors
    render 'shared/construction'
  end
end
