class CreateTextMessages < ActiveRecord::Migration
  def change
    create_table :text_messages do |t|
      t.belongs_to :client
      t.text :content
      t.boolean :incoming_message

      t.timestamps
    end
  end
end
