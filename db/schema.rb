# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_05_10_025847) do

  create_table "patrons", force: :cascade do |t|
    t.string "name", limit: 64, null: false
    t.string "website", limit: 128
    t.integer "prestige", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "patrons_projects", id: false, force: :cascade do |t|
    t.integer "patron_id", null: false
    t.integer "project_id", null: false
    t.index ["patron_id"], name: "index_patrons_projects_on_patron_id"
    t.index ["project_id"], name: "index_patrons_projects_on_project_id"
  end

  create_table "project_memberships", id: false, force: :cascade do |t|
    t.integer "project_id", null: false
    t.integer "sourcerer_id", null: false
    t.string "role", limit: 48, default: "Unassigned", null: false
    t.index ["project_id"], name: "index_project_memberships_on_project_id"
    t.index ["sourcerer_id"], name: "index_project_memberships_on_sourcerer_id"
  end

  create_table "projects", force: :cascade do |t|
    t.string "name", limit: 24, null: false
    t.integer "status", default: 0, null: false
    t.integer "conjurer_id", null: false
    t.integer "sage_id"
    t.string "tags", limit: 128
    t.text "desc", limit: 8196
    t.string "repo_url", limit: 128
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["conjurer_id"], name: "index_projects_on_conjurer_id"
    t.index ["sage_id"], name: "index_projects_on_sage_id"
  end

  create_table "sourcerers", force: :cascade do |t|
    t.string "email", limit: 32, null: false
    t.string "passhash", limit: 48, null: false
    t.string "salt", limit: 16, null: false
    t.string "name", limit: 32, null: false
    t.string "position", limit: 16, default: "New Member", null: false
    t.text "page", limit: 1024
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
